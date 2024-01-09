import * as S from './styles';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import bell from '@_assets/images/svg/bell.svg';
import menu from '@_assets/images/svg/menu.svg';
import arrowLeft from '@_assets/images/svg/arrow-left.svg';
import { modalState } from '@_recoil/atoms/modal';
import { userState } from '@_recoil/atoms/user';
import SideBar from '@_components/SideBar';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { accessToken } = useRecoilValue(userState);
  const location = useLocation();
  const navigate = useNavigate();
  const setModal = useSetRecoilState(modalState);

  const handleLoginBtnClick = () => {
    setModal({ isActive: true });
  };

  return (
    <>
      <S.HeaderContainer>
        {location.pathname === '/createcontent' || location.pathname === '/createPost' ? (
          <S.HeaderBackImg
            src={arrowLeft}
            alt='backBtn'
            onClick={() => {
              navigate(-1);
            }}
          ></S.HeaderBackImg>
        ) : (
          <S.HeaderLogo>BAB-FRIEND</S.HeaderLogo>
        )}
        {accessToken ? (
          <S.HeaderContentBox>
            <S.HeaderAlert src={bell} alt='bellimage' />
            <S.HeaderMenu
              src={menu}
              alt='menuimage'
              onClick={() => {
                setSidebarOpen(true);
              }}
            />
          </S.HeaderContentBox>
        ) : (
          <S.HeaderLogin onClick={handleLoginBtnClick}>로그인</S.HeaderLogin>
        )}
      </S.HeaderContainer>
      {sidebarOpen && <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}
    </>
  );
};

export default Header;
