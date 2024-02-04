import { styled } from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding: 10px 20px;
  border-top: 4px solid ${({ theme }) => `${theme.colors.mainColor}50`};
`;

export const BlockContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  color: ${({ theme }) => theme.colors.mainColor};
  font-family: 'Pretendard-SemiBold';
  font-size: 3em;
  text-shadow:
    -1px 0px rgb(0, 0, 0),
    0px 1px rgb(0, 0, 0),
    1px 0px rgb(0, 0, 0),
    0px -1px rgb(0, 0, 0);
`;

export const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export const Category = styled.div<{ $hasData?: boolean }>`
  display: ${({ $hasData }) => ($hasData ? 'block' : 'none')};
  padding: 1px 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: white;
  font-size: 0.8em;
`;

Category.defaultProps = {
  $hasData: true,
};

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;

export const ContentWrapper = styled.div<{ $isLimit: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  flex: 1;
  z-index: 1;
  filter: ${({ $isLimit }) => ($isLimit ? 'blur(2px) brightness(60%)' : 'none')};
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: ${({ $isLimit }) => ($isLimit ? 'none' : 'scale(1.02)')};
  }
`;

export const Title = styled.p`
  font-size: 1.3em;
  font-family: 'Pretendard-SemiBold';
  margin-bottom: 5px;
`;

export const Content = styled.p`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.3;
  word-break: break-all;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: rgba(0, 0, 0, 0.8);
`;

export const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  margin-bottom: 3px;

  & > span {
    font-size: 0.85em;
    color: rgba(0, 0, 0, 0.6);
  }
`;

export const WriterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.85em;
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
