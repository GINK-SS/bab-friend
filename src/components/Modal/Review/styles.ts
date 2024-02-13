import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const BoardTitle = styled.p`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const Content = styled.textarea`
  padding: 10px;
  resize: vertical;
  outline: 0;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  padding: 10px 50px;
  border: 1px solid rgb(0, 0, 0);

  &:first-child {
    border: 1px solid ${({ theme }) => theme.colors.mainColor};

    &:hover {
      background-color: ${({ theme }) => theme.colors.mainColor};
      color: #fff;
    }
  }
`;
