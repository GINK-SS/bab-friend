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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  height: 100%;
  background-color: #fff;
  user-select: none;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TitleWrapper = styled.div`
  text-align: center;
`;

export const Logo = styled.p`
  font-size: 3.5rem;
  margin-bottom: 1rem;
`;

export const Title = styled.p`
  font-size: 2.5rem;
  font-weight: 700;
`;

export const SubTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Button = styled.button`
  width: 350px;
`;

export const DescWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  color: rgba(0, 0, 0, 0.6);
`;

export const DescLink = styled.p`
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 0.2rem;
`;
