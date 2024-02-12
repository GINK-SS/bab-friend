import styled from 'styled-components';

export const PostContentContainer = styled.div`
  padding: 40px 50px;
`;
export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const LimitJoinText = styled.p`
  color: crimson;
  border: 1px solid red;
  border-radius: 10px;
  padding: 50px 40px;
  text-align: center;
  margin-bottom: 20px;
`;
export const FixBoardText = styled.div`
  color: ${({ theme }) => `${theme.colors.subColor}`};
  border: 1px solid ${({ theme }) => `${theme.colors.subColor}`};
  border-radius: 10px;
  padding: 50px 40px;
  text-align: center;
  margin-bottom: 20px;
`;
export const ChangedBoardText = styled.p`
  font-size: 12px;
  text-align: right;
  color: crimson;
`;
export const PromiseTime = styled.div`
  background-color: ${({ theme }) => `${theme.colors.mainColor}`};
  width: 100%;
  text-align: center;
  padding: 10px 20px;
  color: white;
  border-radius: 10px;
  margin: 30px 0;
  font-size: 14px;
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 18px;
  margin: 10px 0;
  margin-bottom: 30px;
  transition: 0.3s;
  button {
    &:hover {
      font-weight: bold;
    }
  }
`;
export const PostEditBtn = styled.button``;
export const PostDeleteBtn = styled.button``;

export const Content = styled.p`
  margin-top: 20px;
  margin-bottom: 40px;
  line-height: 1.8rem;
  word-spacing: 1px;
`;

export const FixBtn = styled.button``;
export const JoinBtnWrap = styled.div`
  margin: 10px 0;
`;
export const JoinDisableBtn = styled.button`
  width: 100%;
  background-color: ${({ theme }) => `${theme.colors.subColor}`};
  color: white;
  padding: 8px 18px;
  margin-top: 30px;
  border-radius: 10px;
  transition: 0.5s;
  &:hover {
    background-color: crimson;
  }
`;
export const JoinBtn = styled.button`
  width: 100%;
  background-color: ${({ theme }) => `${theme.colors.subColor}`};
  color: white;
  padding: 8px 18px;
  margin-top: 30px;
  border-radius: 10px;
  transition: 0.5s;
  &:hover {
    background-color: blue;
  }
`;
