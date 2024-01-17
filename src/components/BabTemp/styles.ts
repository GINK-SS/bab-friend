import styled from 'styled-components';

export const BabTempContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;
export const TempInfoImg = styled.img`
  width: 16px;
  cursor: pointer;
`;
export const BabReviewWrap = styled.div`
  width: 90%;
  padding: 16px 20px;
  margin-top: 30px;
  border-radius: 16px;
  border: 0.1px solid black;
`;
export const EachReviewWrap = styled.div`
  display: flex;
`;
export const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12px;
`;
export const ReviewImg = styled.img`
  width: 18px;
  margin-right: 4px;
`;
export const ReviewNum = styled.p`
  font-size: 14px;
`;
export const ReviewTextBox = styled.div`
  margin-top: 14px;
  padding: 5px 10px;
  border-radius: 0 8px 8px 8px;
  background-color: ${({ theme }) => theme.colors.subColor};
`;
export const ReviewText = styled.p`
  font-size: 12px;
  color: #fff;
`;
