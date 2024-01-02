import * as S from './styles';

const ProfileInfo = () => {
  return (
    <S.ProfileInfoContainer>
      <S.ProfileImg
        src={
          'https:images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      />
      <S.UserInfoWrapper>
        <S.Nickname>밥심 한국인</S.Nickname>
        <S.UserEmail>leek71355@naver.com</S.UserEmail>
      </S.UserInfoWrapper>
      <S.EditWrap>
        <S.EditText>수정</S.EditText>
      </S.EditWrap>
    </S.ProfileInfoContainer>
  );
};

export default ProfileInfo;
