import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  position: relative;
  padding: 20px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  &:first-child::after {
    border-bottom: 0;
  }
`;

export const ProfileImg = styled.img`
  width: 36px;
  height: 36px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Nickname = styled.p`
  width: max-content;
  padding: 0 5px;
  font-size: 14px;
  font-family: 'Pretendard-Bold';
`;

export const Date = styled.p`
  margin-top: -2px;
  margin-bottom: 5px;
  margin-left: 5px;
  font-family: 'Pretendard-Light';
  font-size: 12px;
  opacity: 0.5;
`;

export const Content = styled.p`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 5px;
  font-size: 13px;
  line-height: 1.3;
  word-break: break-all;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
