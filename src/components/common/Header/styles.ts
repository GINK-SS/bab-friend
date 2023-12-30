import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: rgb(2 1 1 / 10%) 0 5px 20px -5px;
`;
export const HeaderLogo = styled.div`
  width: 72px;
  height: 32px;
  background-color: black;
  font-size: 10px;
  text-align: center;
  line-height: 32px;
  cursor: pointer;
  color: white;
  border-radius: 10px;
`;
export const HeaderContentBox = styled.div`
  width: 78px;
  height: 32px;
  display: flex;
  justify-content: space-between;
`;
export const HeaderLogin = styled.div`
  width: 72px;
  height: 32px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Pretendard-Bold';
  background-color: ${({ theme }) => theme.mainColor};
  color: white;
  border-radius: 10px;
`;
export const HeaderAlert = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
export const HeaderMenu = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
export const HeaderBackImg = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
