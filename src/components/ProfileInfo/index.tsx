import { useEffect, useRef, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import authApi from '@_apis/auth';
import userEditApi from '@_apis/userEdit';
import { UserEditType } from '@_types/userEdit';
import Input from '@_components/common/Input';

import * as S from './styles';

// ToDo : 닉네임을 빈 값으로 전송하면 기존 닉네임으로 유지 (현재는 빈 값으로 입력하면 기존 닉네임이 삭제됨)

const ProfileInfo = () => {
  const imgRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();
  const [editSet, setEditSet] = useState(false);
  const [editData, setEditData] = useState<UserEditType>({
    nickName: '',
    profileImageUrl: null,
  });
  // 사진 변경 시 미리보기
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 유저정보 detail get 요청
  const { data: userInfo } = useQuery({
    queryKey: ['users'],
    queryFn: () => authApi.fetchUserInfoDetail(),
  });

  // 유저정보 detail patch 요청
  const editPatch = useMutation({
    mutationFn: () => userEditApi.userEditPatch(editData),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      console.log('유저정보 수정 완료', data);
    },
    onError: (error) => {
      console.error('유저정보 수정 실패:', error);
    },
  });

  useEffect(() => {
    // 컴포넌트가 처음 렌더링될 때 nickName,profileImage을 설정
    if (userInfo?.data.nickName) {
      setEditData((prevData) => ({ ...prevData, nickName: userInfo.data.nickName }));
    }
    if (userInfo?.data.profileImageUrl) {
      setSelectedImage(userInfo?.data.profileImageUrl);
    }
  }, [userInfo?.data.nickName, userInfo?.data.profileImageUrl]);

  const clickEditBtn = () => {
    setEditSet(!editSet);

    if (editSet) {
      editPatch.mutate();
    }
  };

  const handleChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditData((prevData) => ({ ...prevData, nickName: e.target.value }));
  };

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files?.[0];

    if (imageFile) {
      const imageUrl = URL.createObjectURL(imageFile);
      setEditData((prevData) => ({ ...prevData, profileImageUrl: imageFile }));
      setSelectedImage(imageUrl);
    } else {
      setEditData((prevData) => ({ ...prevData, profileImageUrl: null }));
      setSelectedImage(null);
    }
  };

  const onClickFileBtn = () => {
    if (imgRef.current) {
      imgRef.current.click();
    }
  };
  return (
    <S.ProfileInfoContainer>
      <S.ProfileImgWrap $editSet={editSet}>
        {editSet ? (
          <S.ProfileImg src={selectedImage || ''} onClick={onClickFileBtn} />
        ) : (
          <S.ProfileImg src={userInfo?.data.profileImageUrl ?? ''} />
        )}
        <input type='file' onChange={handleChangeImage} ref={imgRef} style={{ display: 'none' }} />
      </S.ProfileImgWrap>
      {editSet ? (
        <S.EditingWrap>
          <S.InputWrap>
            <Input
              type='text'
              label='닉네임'
              placeholder='변경하실 닉네임을 입력하세요.'
              value={editData?.nickName}
              onChange={handleChangeNickname}
            />
          </S.InputWrap>
        </S.EditingWrap>
      ) : (
        <S.UserInfoWrap>
          <S.Nickname>{userInfo?.data.nickName}</S.Nickname>
          <S.UserEmail>{userInfo?.data.email}</S.UserEmail>
        </S.UserInfoWrap>
      )}
      <S.EditWrap onClick={clickEditBtn}>
        <S.EditText>{editSet ? '완료' : '수정'}</S.EditText>
      </S.EditWrap>
      {editSet && (
        <S.CancelWrap
          onClick={() => {
            setEditSet(false);
          }}
        >
          <S.CancelText>취소</S.CancelText>
        </S.CancelWrap>
      )}
    </S.ProfileInfoContainer>
  );
};

export default ProfileInfo;
