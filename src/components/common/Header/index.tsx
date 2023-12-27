import * as S from './styles';
import bell from '../../../assets/images/svg/bell.svg';
import menu from '../../../assets/images/svg/menu.svg';
import arrowLeft from '../../../assets/images/svg/arrow-left.svg';
import { useNavigate, useLocation } from 'react-router-dom';
import SideBar from '../../SideBar';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { modalState } from '../../../recoil/atoms/modal';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  //TODO: 유저 로그인 상태를 가져와 true, false값으로 반환
  let isLoggedIn = true;
  const location = useLocation();
  const navigate = useNavigate();
  const setModal = useSetRecoilState(modalState);

  const handleLoginBtnClick = () => {
    setModal({ isActive: true });
  };

  return (
    <>
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
            <S.HeaderAlert src={bell} alt="bellimage" />
            <S.HeaderMenu
              src={menu}
              alt="menuimage"
              onClick={() => {
                setSidebarOpen(true);
              }}
            />
          </S.HeaderContentBox>
        ) : (
          <S.HeaderLogin onClick={handleLoginBtnClick}>로그인</S.HeaderLogin>
        )}
      </S.HeaderContainer>
      {sidebarOpen && (
        <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      )}
    </>
  );
};

export default Header;
