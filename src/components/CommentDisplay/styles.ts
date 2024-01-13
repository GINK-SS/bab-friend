import styled from 'styled-components';

export const CommentDisplayContainer = styled.div`
  border-top: 0.1px dotted #d5d4dc;
  padding: 30px 50px;
`;
export const ProfileWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const ProfileImg = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 5px;
  object-fit: cover;
  border-radius: 50%;
`;
export const Nickname = styled.p`
  font-family: 'Pretendard-Bold';
`;
export const Time = styled.p`
  margin-top: 4px;
  font-family: 'Pretendard-Light';
  font-size: 12px;
`;
export const CommentContent = styled.p`
  margin-top: 20px;
`;
