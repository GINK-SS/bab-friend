import { useEffect, useRef, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import authApi from '@_apis/auth';
import userEditApi from '@_apis/userEdit';
import { UserEditType } from '@_types/userEdit';

import * as S from './styles';

// 프로필이미지 변경 안했을 시에는 null 전송 (근데 현재는 nickName, profileImg 모두 수정해야 데이터 전송됨 )
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
      setSelectedImage(`https://bab-friend-back.store${userInfo?.data.profileImageUrl}`);
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
    const file = e.target.files;
    if (file && file[0]) {
      const imageUrl = URL.createObjectURL(file[0]);
      setEditData((prevData) => ({ ...prevData, profileImageUrl: file[0] }));
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
          <S.ProfileImg
            src={selectedImage || `https://bab-friend-back.store${userInfo?.data.profileImageUrl}`}
            onClick={onClickFileBtn}
          />
        ) : (
          <S.ProfileImg src={`https://bab-friend-back.store${userInfo?.data.profileImageUrl}` ?? ''} />
        )}
        <input type='file' onChange={handleChangeImage} ref={imgRef} style={{ display: 'none' }} />
      </S.ProfileImgWrap>
      {editSet ? (
        <S.EditingWrap>
          <S.EditingText>닉네임</S.EditingText>
          <S.EditingInput
            type='text'
            placeholder='변경하실 닉네임을 입력하세요.'
            value={editData?.nickName}
            onChange={handleChangeNickname}
          ></S.EditingInput>
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
    </S.ProfileInfoContainer>
  );
};

export default ProfileInfo;
