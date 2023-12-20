import * as S from './styles';
import bell from '../../../assets/images/svg/bell.svg';
import menu from '../../../assets/images/svg/menu.svg';
import arrowLeft from '../../../assets/images/svg/arrow-left.svg';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  //TODO: 유저 로그인 상태를 가져와 true, false값으로 반환
  let isLoggedIn = false;
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <S.HeaderContainer>
      {location.pathname === '/createcontent' ||
      location.pathname === '/createPost' ? (
        <S.HeaderBackImg
          src={arrowLeft}
          alt="backBtn"
          onClick={() => {
            navigate(-1);
          }}
        ></S.HeaderBackImg>
      ) : (
        <S.HeaderLogo>BAB-FRIEND</S.HeaderLogo>
      )}
      {isLoggedIn ? (
        <S.HeaderContentBox>
          <S.HedaerAlert src={bell} alt="bellimage" />
          <S.HeaderMenu src={menu} alt="menuimage" />
        </S.HeaderContentBox>
      ) : (
        <S.HedaerLogin>로그인</S.HedaerLogin>
      )}
    </S.HeaderContainer>
  );
};

export default Header;
