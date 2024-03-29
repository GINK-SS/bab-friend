import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: absolute;
  top: 3%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  padding: 0 30px;
  width: 85%;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
  padding-bottom: 30px;
  z-index: 2;
`;
export const CloseBtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
`;
export const CloseBtn = styled.img`
  width: 36px;
  height: 36px;
  cursor: pointer;
`;
export const ModalWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 40px 0;
`;
export const ModalInputWrap = styled.div`
  flex: 3;
`;
export const ModalButton = styled.button`
  padding: 5px 10px;
  height: 100%;
  flex: 1;
  border: 0.1px solid gray;
  border-radius: 5px;
`;
export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TextRequired = styled.p``;
export const MarkerContent = styled.p`
  margin-top: 26px;
`;
export const ConfirmBtn = styled.button`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.subColor};
  color: #fff;
  border-radius: 15px;
  margin-top: 10px;
`;
