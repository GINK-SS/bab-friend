import styled from 'styled-components';

export const TextareaWrap = styled.div``;
export const ElTextarea = styled.textarea`
  width: 100%;
  height: 180px;
  border: 1px solid #d5d4dc;

  border-radius: 5px;
  padding: 20px 10px;
  background: none;
  outline: none;
  resize: none;
  &::placeholder {
    top: 10%;
    font-size: 12px;
    opacity: 0.7;
    font-family: 'Pretendard-ExtraLight';
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.mainColor};
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
