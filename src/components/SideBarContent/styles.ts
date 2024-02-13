import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 200px;
  margin: 50px auto;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  &:hover {
    > p {
      color: ${({ theme }) => theme.colors.mainColor};
    }
  }
`;

export const Title = styled.p`
  font-size: 17px;
  transition: 0.1s;
`;
