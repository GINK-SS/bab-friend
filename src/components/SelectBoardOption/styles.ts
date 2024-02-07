import styled from 'styled-components';

export const SelectOptionContainer = styled.div`
  padding-bottom: 30px;
  > div {
    padding: 0 30px;
    margin-top: 30px;
  }
  p {
    margin-bottom: 15px;
    font-size: 16px;
    font-family: 'Pretendard-SemiBold';
    color: ${({ theme }) => theme.colors.blackColor};
  }
  input {
    width: 100%;
    border: 1px solid #d5d4dc;
    border-radius: 5px;
    padding: 5px 10px;
    background: none;
    outline: none;
    &::placeholder {
      font-size: 12px;
      opacity: 0.7;
      font-family: 'Pretendard-ExtraLight';
    }
    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.mainColor};
    }
  }
  select {
    width: 100%;
    outline: none;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #d5d4dc;
    &::placeholder {
      font-size: 12px;
    }
    -webkit-appearance: none; /* 크롬 화살표 없애기 */
    -moz-appearance: none; /* 파이어폭스 화살표 없애기 */
    appearance: none; /* 화살표 없애기 */
  }
`;
export const Region = styled.div``;
export const RegionText = styled.p``;
export const RegoinInput = styled.input``;
export const Price = styled.div``;
export const MenuText = styled.p``;
export const MenuInput = styled.input``;
export const FoodType = styled.div``;
export const FoodTypeText = styled.p``;
export const FoodTypeSelect = styled.select``;
export const FoodTypeSelectOption = styled.option``;
export const Time = styled.div``;
export const TimeText = styled.p``;
export const TimeInput = styled.input``;
export const StoreNameWrap = styled.div``;
export const StoreNameLabel = styled.p`
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.mainColor};
`;
export const StoreInfo = styled.div`
  border: 1px solid #d5d4dc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Pretendard-SemiBold';
  margin: 20px 0px;
  padding: 10px;
`;
export const StoreAddress = styled.p``;
export const StoreName = styled.p``;
export const StoreBtn = styled.button`
  border: 0.1px solid black;
  padding: 2px 8px;
  border-radius: 5px;
  width: 100%;
  border: 0.1px solid black;
  padding: 12px 8px;
  border-radius: 5px;
  &:hover {
    border: 1px solid black;
  }
`;
export const PeopleNum = styled.div``;
export const PeopleNumText = styled.p``;
export const PeopleNumSelect = styled.select``;
export const PeopleNumSelectOption = styled.option``;
export const Alchol = styled.div``;
export const AlcholText = styled.p`
  padding-bottom: -20px;
`;
export const AlcholRadio = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding-left: -20px;
`;
export const AlcholRadioLabel = styled.label`
  cursor: pointer;
  position: relative;
  padding-left: 30px;
`;
export const AlcholInput = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  &:checked + span {
    background-color: ${({ theme }) => theme.colors.mainColor};
  }
  &:checked + span::after {
    display: block;
  }
`;
export const AlcholCustomRadio = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #eee;
  &::after {
    content: '';
    position: absolute;
    display: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: white;
  }
`;
export const AgeLimitWrap = styled.div``;
export const AgeLimitText = styled.p`
  padding-bottom: -20px;
`;
export const AgeLimitRadio = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding-left: -20px;
`;
export const AgeLimitRadioLabel = styled.label`
  cursor: pointer;
  position: relative;
  padding-left: 30px;
`;
export const AgeLimitInput = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  &:checked + span {
    background-color: ${({ theme }) => theme.colors.mainColor};
  }
  &:checked + span::after {
    display: block;
  }
`;
export const AgeLimitCustomRadio = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #eee;
  &::after {
    content: '';
    position: absolute;
    display: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: white;
  }
`;
export const Gender = styled.div``;
export const GenderText = styled.p`
  padding-bottom: -20px;
`;
export const GenderRadioLabel = styled.label`
  cursor: pointer;
  position: relative;
  padding-left: 30px;
`;
export const GenderRadio = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding-left: -20px;
`;
export const GenderInput = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  &:checked + span {
    background-color: ${({ theme }) => theme.colors.mainColor};
  }
  &:checked + span::after {
    display: block;
  }
`;
export const GenderCustomRadio = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #eee;
  &::after {
    content: '';
    position: absolute;
    display: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: white;
  }
`;
export const NextBtnWrap = styled.div`
  margin: 30px 0;
`;
export const NextBtn = styled.button`
  padding: 6px 30px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.subColor};
  color: white;
  width: 100%;
  cursor: pointer;
`;
