import * as S from './styles';
import { Link } from 'react-router-dom';
import kakaoLoginImg from '@_assets/images/png/kakao_login_large_wide.png';

const Login = () => {
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;
  const notionURL = 'https://buttery-editor-146.notion.site/64ec05c62f754148905cacc7ce838f31?pvs=4';

  return (
    <>
      <S.TitleWrapper>
        <S.Logo>🍚</S.Logo>
        <S.Title>어서오세요!</S.Title>
        <S.SubTitle>함께 먹는 즐거움, 밥 프렌즈</S.SubTitle>
      </S.TitleWrapper>

      <S.ButtonWrapper>
        <S.Button>
          <Link to={kakaoURL}>
            <img src={kakaoLoginImg} alt='카카오 로그인' />
          </Link>
        </S.Button>
      </S.ButtonWrapper>

      <S.DescWrapper>
        <p>밥 프렌즈에 대해 궁금하다면?</p>
        <Link to={notionURL} target='_blank'>
          <S.DescLink>상세정보</S.DescLink>
        </Link>
      </S.DescWrapper>
    </>
  );
};

export default Login;
