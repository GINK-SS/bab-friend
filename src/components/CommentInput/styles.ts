import styled from 'styled-components';

export const CommentContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px 50px;
`;
export const CommentTextWrap = styled.div`
  flex: 1;
`;
export const CommentText = styled.p`
  font-family: 'Pretendard-Bold';
  font-size: 18px;
`;
export const CommentNickname = styled.p`
  font-size: 14px;
`;
export const InputWrap = styled.div`
  flex: 5;
`;
export const CommentInput = styled.textarea`
  width: 100%;
  height: 100px;
  border: 1px solid #d5d4dc;

  border-radius: 5px;
  padding: 20px 10px;
  background: none;
  outline: none;
  resize: none;
  &::placeholder {
    font-size: 12px;
    opacity: 0.7;
    font-family: 'Pretendard-ExtraLight';
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.mainColor};
  }
`;
export const SubmitButton = styled.span`
  float: right;
  font-size: 14px;
  padding: 5px 18px;
  margin-top: 18px;
  margin-right: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.subColor};
  color: #fff;
  cursor: pointer;
`;
