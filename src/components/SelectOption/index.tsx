import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import { FormDataType } from '../../types/createPost';

const SelectOption = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormDataType>({
    foodType: '',
    menu: '',
    store: '',
    region: '',
    time: '',
    peopleNum: '',
    alchol: '',
    gender: '',
  });

  const handleChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <S.SelectOptionContainer>
      <S.FoodType>
        <S.FoodTypeText>음식 종류</S.FoodTypeText>
        <S.FoodTypeSelect
          name="foodType"
          onChange={(e) => handleChange('foodType', e.target.value)}
          value={formData.foodType}
        >
          <S.FoodTypeSelectOption value="">
            음식 카테고리
          </S.FoodTypeSelectOption>
          <S.FoodTypeSelectOption value="korea">한식</S.FoodTypeSelectOption>
          <S.FoodTypeSelectOption value="japan">일식</S.FoodTypeSelectOption>
          <S.FoodTypeSelectOption value="china">중식</S.FoodTypeSelectOption>
          <S.FoodTypeSelectOption value="west">양식</S.FoodTypeSelectOption>
        </S.FoodTypeSelect>
      </S.FoodType>
      <S.Menu>
        <S.MenuText>메뉴</S.MenuText>
        <S.MenuInput
          type="text"
          placeholder="메뉴를 입력해주세요."
          onChange={(e) => handleChange('menu', e.target.value)}
          value={formData.menu}
        ></S.MenuInput>
      </S.Menu>
      <S.Store>
        <S.StoreText>가게명</S.StoreText>
        <S.StoreInput
          type="text"
          placeholder="가게명을 입력해주세요."
          onChange={(e) => handleChange('store', e.target.value)}
          value={formData.store}
        ></S.StoreInput>
      </S.Store>
      <S.Region>
        <S.RegionText>지역</S.RegionText>
        <S.RegoinInput
          type="text"
          placeholder="지역을 입력해주세요."
          onChange={(e) => handleChange('region', e.target.value)}
          value={formData.region}
        ></S.RegoinInput>
      </S.Region>
      <S.Time>
        <S.TimeText>식사 시간</S.TimeText>
        <S.TimeInput
          type="text"
          placeholder="식사 시간을 입력해주세요."
          onChange={(e) => handleChange('time', e.target.value)}
          value={formData.time}
        ></S.TimeInput>
      </S.Time>
      <S.PeopleNum>
        <S.PeopleNumText>모집 인원</S.PeopleNumText>
        <S.PeopleNumSelect
          name="peopleNum"
          onChange={(e) => handleChange('peopleNum', e.target.value)}
          value={formData.peopleNum}
        >
          <S.PeopleNumSelectOption value="">최대 5명</S.PeopleNumSelectOption>
          <S.PeopleNumSelectOption value="1person">1명</S.PeopleNumSelectOption>
          <S.PeopleNumSelectOption value="2person">2명</S.PeopleNumSelectOption>
          <S.PeopleNumSelectOption value="3person">3명</S.PeopleNumSelectOption>
          <S.PeopleNumSelectOption value="4person">4명</S.PeopleNumSelectOption>
          <S.PeopleNumSelectOption value="5person">5명</S.PeopleNumSelectOption>
        </S.PeopleNumSelect>
      </S.PeopleNum>
      <S.Alchol>
        <S.AlcholText>술 여부</S.AlcholText>
        <S.AlcholRadio>
          <S.AlcholRadioLabel htmlFor="alcholOk">
            술 ok
            <S.AlcholInput
              type="radio"
              id="alcholOk"
              name="alchol"
              onChange={() => handleChange('alchol', 'ok')}
              checked={formData.alchol === 'ok'}
            ></S.AlcholInput>
            <S.AlcholCustomRadio></S.AlcholCustomRadio>
          </S.AlcholRadioLabel>
          <S.AlcholRadioLabel htmlFor="alcholNo">
            술 nope
            <S.AlcholInput
              type="radio"
              id="alcholNo"
              name="alchol"
              onChange={() => handleChange('alchol', 'nope')}
              checked={formData.alchol === 'nope'}
            ></S.AlcholInput>
            <S.AlcholCustomRadio></S.AlcholCustomRadio>
          </S.AlcholRadioLabel>
        </S.AlcholRadio>
      </S.Alchol>
      <S.gender>
        <S.genderText>성별</S.genderText>
        <S.genderRadio>
          <S.genderRadioLabel htmlFor="male">
            남자만
            <S.genderInput
              type="radio"
              id="male"
              name="gender"
              onChange={() => handleChange('gender', 'male')}
              checked={formData.gender === 'male'}
            ></S.genderInput>
            <S.genderCustomRadio></S.genderCustomRadio>
          </S.genderRadioLabel>
          <S.genderRadioLabel htmlFor="female">
            여자만
            <S.genderInput
              type="radio"
              id="female"
              name="gender"
              onChange={() => handleChange('gender', 'female')}
              checked={formData.gender === 'female'}
            ></S.genderInput>
            <S.genderCustomRadio></S.genderCustomRadio>
          </S.genderRadioLabel>
          <S.genderRadioLabel htmlFor="mix">
            상관없음
            <S.genderInput
              type="radio"
              id="mix"
              name="gender"
              onChange={() => handleChange('gender', 'mix')}
              checked={formData.gender === 'mix'}
            ></S.genderInput>
            <S.genderCustomRadio></S.genderCustomRadio>
          </S.genderRadioLabel>
        </S.genderRadio>
      </S.gender>
      <S.NextBtnWrap>
        <S.NextBtn
          onClick={() => {
            navigate('/createcontent', {
              state: { ...formData },
            });
          }}
        >
          다음
        </S.NextBtn>
      </S.NextBtnWrap>
    </S.SelectOptionContainer>
  );
};

export default SelectOption;
