import { styled } from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-top: 4px solid ${({ theme }) => `${theme.colors.mainColor}50`};
`;

export const BlockContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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

export const Wrapper = styled.div<{ $isLimit: boolean }>`
  padding: 20px;
  filter: ${({ $isLimit }) => ($isLimit ? 'blur(2px) brightness(60%)' : 'none')};
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: ${({ $isLimit }) => ($isLimit ? 'none' : 'scale(1.02)')};
  }
`;

export const CategoryWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 7px;
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
