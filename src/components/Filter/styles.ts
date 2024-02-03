import { IoHelpCircleOutline } from 'react-icons/io5';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
  max-width: 400px;
  margin: 0 auto 10px;
  font-size: 14px;
`;

export const QuestionBtn = styled(IoHelpCircleOutline)`
  font-size: 20px;
  opacity: 70%;
  cursor: pointer;
`;

export const JoinPossibleBtn = styled.button<{ isActive: boolean }>`
  padding: 5px 10px;
  border: 1px solid ${({ theme, isActive }) => (isActive ? theme.colors.mainColor : 'rgba(0, 0, 0, 0.5)')};
  border-radius: 30px;
  color: ${({ theme, isActive }) => (isActive ? theme.colors.mainColor : '#000')};
`;

export const ExplainBox = styled.div<{ isShow: boolean }>`
  max-width: 400px;
  margin: 0 auto 10px;
  padding: 5px 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  display: ${({ isShow }) => (isShow ? 'block' : 'none')};
  text-align: center;
`;

export const Explain = styled.p`
  font-size: 13px;
  > span {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.mainColor};
  }
`;
