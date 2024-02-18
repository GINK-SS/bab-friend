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
export const AlcoholRadioLabel = styled.label`
  cursor: pointer;
  position: relative;
  padding-left: 30px;
`;
export const AlcoholInput = styled.input`
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
export const AlcoholCustomRadio = styled.span`
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

export const CreateContentContainer = styled.div`
  p {
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
  textarea {
    width: 100%;
    height: 200px;
    border: 1px solid #d5d4dc;

    border-radius: 5px;
    padding: 20px 10px;
    background: none;
    outline: none;
    resize: none;
    &::placeholder {
      top: 10%;
      font-size: 12px;
      opacity: 0.7;
      font-family: 'Pretendard-ExtraLight';
    }
    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.mainColor};
    }
  }
  label {
    display: block;
    margin-bottom: 15px;
    font-size: 16px;
    font-family: 'Pretendard-SemiBold';
  }
`;

export const TextBox = styled.div`
  width: 100%;
  height: 86px;
  border-bottom: 0.1px solid black;

  display: flex;
  padding-left: 30px;
  align-content: center;
`;
export const InfoText = styled.p`
  display: flex;
  align-items: center;
  font-size: 13px;
  height: inherit;
  font-family: 'Pretendard-Ligt';
`;
export const InfoImg = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 5px;
`;
export const Title = styled.div`
  margin-top: 60px;
`;
export const TitleText = styled.p`
  margin-bottom: 15px;
  font-size: 16px;
  font-family: 'Pretendard-SemiBold';
`;
export const TitleInput = styled.input``;
export const Content = styled.div`
  margin-top: 30px;
`;
export const ContentText = styled.p`
  margin-bottom: 15px;
  font-size: 16px;
  font-family: 'Pretendard-SemiBold';
`;
export const ContentInput = styled.textarea`
  width: 100%;
  height: 180px;
  border: 1px solid #d5d4dc;

  border-radius: 5px;
  padding: 20px 10px;
  background: none;
  outline: none;
  resize: none;
  &::placeholder {
    font-size: 12px;
    opacity: 0.7;
    font-family: 'Pretendard-ExtraLight';
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.mainColor};
  }
`;
export const Link = styled.div`
  margin-top: 30px;
`;
export const LinkText = styled.p`
  margin-bottom: 15px;
  font-size: 16px;
`;
export const LinkInput = styled.input``;
export const BtnWrap = styled.div`
  display: flex;
  margin: 36px 0;
  width: 100%;
  justify-content: center;
  gap: 20px;
  button {
    flex: 1;
    padding: 8px 20px;
    border-radius: 20px;
    font-family: 'Pretendard-SemiBold';
  }
`;
export const PrevBtn = styled.button`
  background-color: white;
  color: black;
  border: 0.1px solid black;
`;
export const CancelBtn = styled.button`
  border: 1px solid black;
`;
export const editBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.subColor};
  color: white;
`;
export const ErrorMessage = styled.span`
  color: red;
  font-size: 10px;
`;
