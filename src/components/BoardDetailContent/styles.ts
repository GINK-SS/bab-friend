import styled from 'styled-components';

export const PostContentContainer = styled.div`
  padding: 40px 50px;
`;
export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
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
