import * as S from './styles';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import menu from '@_assets/images/svg/menu.svg';
import { ModalName, modalState } from '@_recoil/atoms/modal';
import SideBar from '@_components/SideBar';
import { authState } from '@_recoil/atoms/auth';
import { AuthStatus } from '@_types/auth';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { authStatus } = useRecoilValue(authState);
  const location = useLocation();
  const navigate = useNavigate();
  const setModal = useSetRecoilState(modalState);
  const backArray = ['/createcontent', '/createboard', '/profile/reviews'];

  const onLogoClick = () => {
    navigate('/');
  };

  const handleLoginBtnClick = () => {
    setModal({ name: ModalName.login, isActive: true });
  };

  return (
    <>
      <S.HeaderContainer>

        {backArray.includes(location.pathname) ? (
          <S.HeaderBackImg
            onClick={() => {
              navigate(-1);
            }}
          ></S.HeaderBackImg>
        ) : (
          <S.HeaderLogo onClick={onLogoClick}>BAB-FRIEND</S.HeaderLogo>
        )}
        {authStatus === AuthStatus.authorized ? (
          <S.HeaderContentBox>
            <S.HeaderMenu
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
