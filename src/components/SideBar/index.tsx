import { useEffect } from 'react';

import * as S from './styles';
import SideBarContent from '../SideBarContent';
import { SideBarPropsType } from '../../types/sideBar';

import close from '../../assets/images/svg/cancle.svg';
import arrow from '../../assets/images/svg/arrow.svg';
import ProgressBar from '../common/ProgressBar';

const SideBar = ({ sidebarOpen, setSidebarOpen }: SideBarPropsType) => {
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
  return (
    <>
      <S.SideMenuBackground
        $sidebarOpen={sidebarOpen}
        onClick={handleCloseSidebar}
      />
      <S.SideBarContainer $sidebarOpen={sidebarOpen}>
        <S.CloseBtnWrap>
          <S.CloseBtn src={close} onClick={handleCloseSidebar} />
        </S.CloseBtnWrap>
        <S.Profile>
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
        <S.Logout>로그아웃</S.Logout>
      </S.SideBarContainer>
    </>
  );
};

export default SideBar;
