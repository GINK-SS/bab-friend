import { useRef, useState } from 'react';
import * as S from './styles';

type EditDataType = {
  nickName: string;
  profileImageUrl: string;
};

const ProfileInfo = () => {
  const [editSet, setEditSet] = useState(false);
  const [editData, setEditData] = useState<EditDataType>({
    nickName: '밥심 한국인',
    profileImageUrl:
      'https:images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  });
  const imgRef = useRef<HTMLInputElement>(null);

  const handleEditState = () => {
    setEditSet(!editSet);
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
            <S.ProfileImg src={editData.profileImageUrl} onClick={onClickFileBtn} />
          ) : (
            <S.ProfileImg src={editData.profileImageUrl} />
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
            <S.Nickname>{editData?.nickName}</S.Nickname>
            <S.UserEmail>leek71355@naver.com</S.UserEmail>
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
