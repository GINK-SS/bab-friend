import styled, { keyframes } from 'styled-components';

export const SideMenuBackground = styled.div<{ $sidebarOpen: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  animation: ${({ $sidebarOpen }) => ($sidebarOpen ? blurIn : blurOut)} 0.3s
    ease-in-out forwards;
  z-index: 1;
`;
export const SideBarContainer = styled.div<{ $sidebarOpen: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  height: 100%;
  background-color: white;
  animation: ${({ $sidebarOpen }) => ($sidebarOpen ? showUp : showOut)} 0.3s
    ease-in-out forwards;
  box-shadow: 0 0 5px black;
  z-index: 1;
`;

export const CloseBtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 60px;
  padding: 0 20px;
`;
export const CloseBtn = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
export const Profile = styled.div`
  border-bottom: 0.1px solid ${({ theme }) => theme.subColor};
  padding-bottom: 30px;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;
export const ProfileImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid black;
  object-fit: cover;
`;
export const ProfileNickname = styled.p``;
export const ProfileArrow = styled.img`
  width: 20px;
  height: 20px;
`;
export const TemperatureWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const Temperature = styled.div`
  width: 200px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const TemperatureStatus = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TemperatureText = styled.p`
  font-size: 14px;
  font-family: 'Pretendard-Medium';
`;
export const TemperatureNum = styled.p`
  color: ${({ theme }) => theme.mainColor};
  font-size: 14px;
`;
export const ProgressBar = styled.div`
  width: 100%;
  height: 15px;
  background-color: #dedede;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.8rem;
  margin-top: 6px;
  overflow: hidden;
`;
export const Progress = styled.div`
  width: 39.5%;
  height: 15px;
  padding: 0;
  text-align: center;
  background-color: ${({ theme }) => theme.mainColor};
  border-radius: 12px;
  color: #111;
`;

export const Logout = styled.div`
  position: absolute;
  right: 16px;
  bottom: 16px;
  font-size: 14px;
  font-family: 'Pretendard-Bold';

  cursor: pointer;
`;

const showUp = keyframes`
  0% {
    transform: translate(100%, 0);
  }

  100% {
    transform: translate(0, 0);
  }
`;

const showOut = keyframes`
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(100%, 0);
  }
`;
const blurIn = keyframes`
  0% {
    backdrop-filter: blur(0);
  }

  100% {
    backdrop-filter: blur(2px);
  }
`;

const blurOut = keyframes`
  0% {
    backdrop-filter: blur(2px);
  }

  100% {
    backdrop-filter: blur(0);
  }
`;
