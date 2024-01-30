import styled from 'styled-components';

export const Container = styled.div`
  max-width: 400px;
  margin: 40px auto 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 30px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.mainColor};
`;

export const Icon = styled.button`
  padding: 5px;
  color: #fff;
`;

export const Input = styled.input`
  flex: 1;
  background-color: transparent;
  border: 0;
  outline: 0;
  color: #fff;

  &::placeholder {
    color: #fff;
    opacity: 70%;
  }
`;
