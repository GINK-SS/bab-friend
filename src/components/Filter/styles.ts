import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
  max-width: 400px;
  margin: 0 auto 20px;
  font-size: 13px;
`;

export const JoinPossibleBtn = styled.button<{ isActive: boolean }>`
  padding: 5px 10px;
  border: 1px solid ${({ theme, isActive }) => (isActive ? theme.colors.mainColor : 'rgba(0, 0, 0, 0.5)')};
  border-radius: 30px;
  color: ${({ theme, isActive }) => (isActive ? theme.colors.mainColor : '#000')};
`;
