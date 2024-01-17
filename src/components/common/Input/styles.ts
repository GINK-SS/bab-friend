import styled from 'styled-components';

export const InputWrap = styled.div``;
export const ElInput = styled.input`
  width: 100%;
  border: 1px solid #d5d4dc;
  border-radius: 5px;
  padding: 5px 10px;
  background: none;
  outline: none;
  &::placeholder {
    font-size: 12px;
    opacity: 0.7;
    font-family: 'Pretendard-ExtraLight';
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.mainColor};
  }
`;
export const Label = styled.label`
  display: block;
  margin-bottom: 15px;
  font-size: 16px;
  font-family: 'Pretendard-SemiBold';
`;
export const ErrorMessage = styled.div`
  font-size: 12px;
  color: crimson;
  margin-top: 8px;
  margin-left: 4px;
`;
