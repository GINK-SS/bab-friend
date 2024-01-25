import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { useQuery } from '@tanstack/react-query';
import { authState } from '@_recoil/atoms/auth';
import { userState } from '@_recoil/atoms/user';

import SideBarContent from '@_components/SideBarContent';
import ProgressBar from '@_components/common/ProgressBar';
import { deleteAccessToken } from '@_apis/axios';
import authApi from '@_apis/auth';
import { AuthStatus } from '@_types/auth';
import { SideBarPropsType } from '@_types/sideBar';

import * as S from './styles';

const SideBar = ({ sidebarOpen, setSidebarOpen }: SideBarPropsType) => {
  const setAuthInfo = useSetRecoilState(authState);
  const resetUserInfo = useResetRecoilState(userState);
  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener('scroll', handleCloseSidebar);
    return () => {
      document.removeEventListener('scroll', handleCloseSidebar);
    };
  }, [sidebarOpen]);
  const handleCloseSidebar = () => {
    if (sidebarOpen) {
      setSidebarOpen(false);
    }
  };
  const { data: userInfo } = useQuery({
    queryKey: ['users'],
    queryFn: () => authApi.fetchUserInfoDetail(),
  });

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
          <S.CloseIcon size='30' onClick={handleCloseSidebar} />
        </S.CloseBtnWrap>
        <S.Profile onClick={onProfileClick}>
          <S.ProfileImg src={userInfo?.data.profileImageUrl || ''}></S.ProfileImg>
          <S.ProfileNickname>{userInfo?.data.nickName}</S.ProfileNickname>
          <S.ArrowBtn />
        </S.Profile>
        <ProgressBar temp={userInfo?.data.temperature} />
        <SideBarContent setSidebarOpen={setSidebarOpen} />
        <S.Logout onClick={logout}>로그아웃</S.Logout>
      </S.SideBarContainer>
    </>
  );
};

export default SideBar;
