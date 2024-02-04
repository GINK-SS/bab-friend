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
  padding: 10px 40px;
  text-align: center;
  margin-bottom: 20px;
`;
export const ChangedBoardText = styled.p`
  font-size: 12px;
  text-align: right;
  color: crimson;
`;
export const PromiseTime = styled.span`
  background-color: ${({ theme }) => `${theme.colors.mainColor}`};
  padding: 10px 20px;
  color: white;
  border-radius: 10px;
  margin: 30px 0;
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: 20px 0;
`;
export const PostEditBtn = styled.button``;
export const PostDeleteBtn = styled.button``;

export const Content = styled.p`
  line-height: 3rem;
  word-spacing: 1px;
`;

export const FixBtn = styled.button``;
export const JoinBtnWrap = styled.div`
  text-align: right;
  margin: 10px 0;
`;
export const JoinBtn = styled.button`
  background-color: ${({ theme }) => `${theme.colors.subColor}`};
  color: white;
  padding: 8px 18px;
  border-radius: 10px;
`;
