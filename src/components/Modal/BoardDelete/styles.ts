import styled from 'styled-components';

export const DeleteBoxWrap = styled.div``;
export const DeleteConfirm = styled.p`
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  color: ${({ theme }) => `${theme.colors.subColor}`};
`;
export const ConfirmBtnWrap = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  button {
    padding: 10px 30px;
    border-radius: 10px;
  }
`;
export const DeleteBtn = styled.button`
  background-color: crimson;
  color: white;
`;
export const CancelBtn = styled.button`
  border: 1px solid ${({ theme }) => `${theme.colors.subColor}`};
`;
