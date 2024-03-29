import { IoCloseCircleSharp } from 'react-icons/io5';
import { FaArrowRightLong } from 'react-icons/fa6';
import styled, { keyframes } from 'styled-components';

export const SideMenuBackground = styled.div<{ $sidebarOpen: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  animation: ${({ $sidebarOpen }) => ($sidebarOpen ? blurIn : blurOut)} 0.3s ease-in-out forwards;
  z-index: 5;
`;
export const SideBarContainer = styled.div<{ $sidebarOpen: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  height: 100%;
  background-color: white;
  animation: ${({ $sidebarOpen }) => ($sidebarOpen ? showUp : showOut)} 0.3s ease-in-out forwards;
  box-shadow: 0 0 5px black;
  z-index: 5;
`;

export const CloseBtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 60px;
  padding: 0 20px;
`;
export const CloseIcon = styled(IoCloseCircleSharp)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.subColor};
`;
export const CloseBtn = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
export const Profile = styled.div`
  border-bottom: 0.1px solid ${({ theme }) => theme.colors.subColor};
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
export const ArrowBtn = styled(FaArrowRightLong)`
  cursor: pointer;
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
