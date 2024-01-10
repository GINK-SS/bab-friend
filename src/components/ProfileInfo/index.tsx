import { useEffect, useRef, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

import { fetchUserInfoDetail } from '@_apis/auth';
import { userState } from '@_recoil/atoms/user';
import { userEditPatch } from '@_apis/userEdit';
import { UserEditType } from '@_types/userEdit';

import * as S from './styles';

const ProfileInfo = () => {
  const [editSet, setEditSet] = useState(false);
  const [editData, setEditData] = useState<UserEditType>({
    nickName: '',
    profileImageUrl: '',
  });
  const user = useRecoilValue(userState);
  // 유저정보 detail get 요청
  const { data: userInfo } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetchUserInfoDetail(user.accessToken),
  });
  // 서버상태값 state에 저장
  useEffect(() => {
    if (userInfo?.data) {
      setEditData({
        nickName: userInfo.data.nickName,
        profileImageUrl: userInfo.data.profileImageUrl,
      });
    }
  }, [userInfo?.data]);
  // 유저정보 수정
  const editPatch = useMutation({
    mutationFn: () => userEditPatch(user.accessToken, { ...editData }),
    onSuccess: (data) => {
      console.log('유저정보 수정 완료', data);
    },
    onError: (error) => {
      console.error('유저정보 수정 실패:', error);
    },
  });

  const imgRef = useRef<HTMLInputElement>(null);

  const handleEditState = () => {
    setEditSet(!editSet);
    editPatch.mutate();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditData((prevData) => ({ ...prevData, nickName: e.target.value }));
  };

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    if (file && file[0]) {
      const imageUrl = URL.createObjectURL(file[0]);
      setEditData((prevData) => ({ ...prevData, profileImageUrl: imageUrl }));
    }
  };

  const onClickFileBtn = () => {
    if (imgRef.current) {
      imgRef.current.click();
    }
  };

  return (
    <>
      <S.ProfileInfoContainer>
        <S.ProfileImgWrap $editSet={editSet}>
          {editSet ? (
            <S.ProfileImg src={editData?.profileImageUrl} onClick={onClickFileBtn} />
          ) : (
            <S.ProfileImg src={userInfo?.data.profileImageUrl} />
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
              onChange={handleChange}
            ></S.EditingInput>
          </S.EditingWrap>
        ) : (
          <S.UserInfoWrap>
            <S.Nickname>{userInfo?.data.nickName}</S.Nickname>
            <S.UserEmail>{userInfo?.data.email}</S.UserEmail>
          </S.UserInfoWrap>
        )}
        <S.EditWrap>
          {editSet ? (
            <S.EditText onClick={handleEditState}>완료</S.EditText>
          ) : (
            <S.EditText onClick={handleEditState}>수정</S.EditText>
          )}
        </S.EditWrap>
      </S.ProfileInfoContainer>
    </>
  );
};

export default ProfileInfo;
