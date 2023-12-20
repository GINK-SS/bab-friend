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
  }
  input {
    width: 100%;
    border: 1px gray solid;
    border-radius: 5px;
    padding: 5px 10px;
    background: none;
    outline: none;
    &::placeholder {
      font-size: 10px;
    }
  }
  select {
    width: 100%;
    outline: none;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px gray solid;
    -webkit-appearance: none; /* 크롬 화살표 없애기 */
    -moz-appearance: none; /* 파이어폭스 화살표 없애기 */
    appearance: none; /* 화살표 없애기 */
  }
`;
export const Region = styled.div``;
export const RegionText = styled.p``;
export const RegoinInput = styled.input``;
export const Menu = styled.div``;
export const MenuText = styled.p``;
export const MenuInput = styled.input``;
export const Store = styled.div``;
export const StoreText = styled.p``;
export const StoreInput = styled.input``;
export const FoodType = styled.div``;
export const FoodTypeText = styled.p``;
export const FoodTypeSelect = styled.select``;
export const FoodTypeSelectOption = styled.option``;
export const Time = styled.div``;
export const TimeText = styled.p``;
export const TimeInput = styled.input``;
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
    background-color: #000;
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
    /* 최초 display none */
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
export const gender = styled.div``;
export const genderText = styled.p`
  padding-bottom: -20px;
`;
export const genderRadioLabel = styled.label`
  cursor: pointer;
  position: relative;
  padding-left: 30px;
`;
export const genderRadio = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding-left: -20px;
`;
export const genderInput = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  &:checked + span {
    background-color: #000;
  }
  &:checked + span::after {
    display: block;
  }
`;
export const genderCustomRadio = styled.span`
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
    /* 최초 display none */
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
  background-color: black;
  color: white;
  width: 100%;
  cursor: pointer;
`;
