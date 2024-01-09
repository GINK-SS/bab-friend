import styled from 'styled-components';

export const TemperatureWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 40px;
`;
export const Temperature = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const TemperatureStatus = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TemperatureText = styled.p`
  font-size: 14px;
  font-family: 'Pretendard-Medium';
`;
export const TemperatureNum = styled.p`
  color: ${({ theme }) => theme.mainColor};
  font-size: 14px;
`;
export const ProgressBar = styled.div`
  width: 100%;
  height: 15px;
  background-color: #dedede;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.8rem;
  margin-top: 6px;
  overflow: hidden;
`;
export const Progress = styled.div<{ $temp: number }>`
  width: ${({ $temp }) => `${$temp}%`};
  height: 15px;
  padding: 0;
  text-align: center;
  background-color: ${({ theme }) => theme.mainColor};
  border-radius: 12px;
  color: #111;
`;
