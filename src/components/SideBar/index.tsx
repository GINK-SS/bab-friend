import { useEffect } from 'react';

import * as S from './styles';
import SideBarContent from '@_components/SideBarContent';
import { SideBarPropsType } from '@_types/sideBar';
import ProgressBar from '@_components/common/ProgressBar';

import close from '@_assets/images/svg/cancle.svg';
import arrow from '@_assets/images/svg/arrow.svg';
import { deleteAccessToken } from '@_apis/axios';
import authApi from '@_apis/auth';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { authState } from '@_recoil/atoms/auth';
import { userState } from '@_recoil/atoms/user';
import { useNavigate } from 'react-router-dom';
import { AuthStatus } from '@_types/auth';

const SideBar = ({ sidebarOpen, setSidebarOpen }: SideBarPropsType) => {
  const setAuthInfo = useSetRecoilState(authState);
  const resetUserInfo = useResetRecoilState(userState);
  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [sidebarOpen]);

  const handleScroll = () => {
    if (sidebarOpen) {
      setSidebarOpen(false);
    }
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  const onProfileClick = () => {
    navigate('/profile');
    setSidebarOpen(false);
  };

  const logout = () => {
    // ToDo: refreshToken 삭제 요청 API
    authApi.stopRefresh();
    resetUserInfo();
    deleteAccessToken();
    setAuthInfo({ authStatus: AuthStatus.unauthorized });
    setSidebarOpen(false);
    navigate('/');
  };

  return (
    <>
      <S.SideMenuBackground $sidebarOpen={sidebarOpen} onClick={handleCloseSidebar} />
      <S.SideBarContainer $sidebarOpen={sidebarOpen}>
        <S.CloseBtnWrap>
          <S.CloseBtn src={close} onClick={handleCloseSidebar} />
        </S.CloseBtnWrap>
        <S.Profile onClick={onProfileClick}>
          <S.ProfileImg
            src={
              'https:images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
          ></S.ProfileImg>
          <S.ProfileNickname>밥프렌즈 님</S.ProfileNickname>
          <S.ProfileArrow src={arrow} />
        </S.Profile>
        <ProgressBar temp={36.5} />
        <SideBarContent setSidebarOpen={setSidebarOpen} />
        <S.Logout onClick={logout}>로그아웃</S.Logout>
      </S.SideBarContainer>
    </>
  );
};

export default SideBar;
