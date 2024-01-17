import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-top: 4px solid ${({ theme }) => `${theme.colors.mainColor}80`};
  cursor: pointer;
`;

export const Title = styled.p`
  font-size: 1.3em;
  font-family: 'Pretendard-SemiBold';
  margin-bottom: 5px;
`;

export const Content = styled.p`
  margin-bottom: 20px;
  color: rgba(0, 0, 0, 0.8);
`;

export const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  margin-bottom: 3px;

  & > span {
    color: rgba(0, 0, 0, 0.6);
  }
`;

export const WriterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: rgba(0, 0, 0, 0.6);
`;

export const WriterImage = styled.img`
  width: 21px;
  height: 21px;
  margin-left: 2px;
  border: 1px solid black;
  border-radius: 50%;
  object-fit: cover;
`;
