import { useEffect } from 'react';
import * as S from './styles';
import { SideBarPropsType } from '../../types/sidebar';
import close from '../../assets/images/svg/cancle.svg';
import arrow from '../../assets/images/svg/arrow.svg';
import square from '../../assets/images/svg/square.svg';
import page from '../../assets/images/svg/page.svg';

import { useNavigate } from 'react-router-dom';

const SideBar = ({ setSidebarOpen, sidebarOpen }: SideBarPropsType) => {
  const navigate = useNavigate();
  const handleScroll = () => {
    if (sidebarOpen) {
      setSidebarOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <S.SideMenuBackground
        sidebarOpen={sidebarOpen}
        onClick={() => setSidebarOpen(false)}
      />
      <S.SideBarContainer sidebarOpen={sidebarOpen}>
        <S.CloseBtnWrap>
          <S.CloseBtn
            src={close}
            onClick={() => {
              setSidebarOpen(!sidebarOpen);
            }}
          />
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
        <S.TemperatureWrap>
          <S.Temperature>
            <S.TemperatureStatus>
              <S.TemperatureText>밥 온도</S.TemperatureText>
              <S.TemperatureNum>39.5°C</S.TemperatureNum>
            </S.TemperatureStatus>
            <S.ProgressBar>
              <S.Progress />
            </S.ProgressBar>
          </S.Temperature>
        </S.TemperatureWrap>
        <S.SideBarContent>
          <S.WritePost
            onClick={() => {
              navigate('./createPost');
              setSidebarOpen(false);
            }}
          >
            <S.WritePostImg src={square}></S.WritePostImg>
            <S.WritePostText>새 글 작성하기</S.WritePostText>
          </S.WritePost>
          <S.MyPost>
            <S.MyPostImg src={page}></S.MyPostImg>
            <S.MyPostText>내가 만든 식사</S.MyPostText>
          </S.MyPost>
        </S.SideBarContent>
      </S.SideBarContainer>
    </>
  );
};

export default SideBar;
