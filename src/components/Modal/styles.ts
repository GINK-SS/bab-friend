import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1px);
`;

export const Container = styled.div<{ isFullScreen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({ isFullScreen }) =>
    isFullScreen ? '#FFF' : 'transparent'};
  user-select: none;
`;

export const Content = styled.div<{
  isFullScreen: boolean;
  contentPadding?: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: ${({ contentPadding }) => contentPadding ?? '1rem'};
  border: ${({ isFullScreen }) =>
    isFullScreen ? '0' : '1px solid rgba(0, 0, 0, 0.3)'};
  border-radius: 10px;
  background-color: #fff;
  box-shadow: ${({ isFullScreen }) =>
    isFullScreen ? '0' : '0 25px 50px -12px rgba(0, 0, 0, 0.25)'};
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
