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
          required
        >
          <S.FoodTypeSelectOption value="" disabled>
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
          required
        ></S.MenuInput>
      </S.Menu>
      <S.Store>
        <S.StoreText>가게명</S.StoreText>
        <S.StoreInput
          type="text"
          placeholder="가게명을 입력해주세요."
          onChange={(e) => handleChange('store', e.target.value)}
          value={formData.store}
          required
        ></S.StoreInput>
      </S.Store>
      <S.Region>
        <S.RegionText>지역</S.RegionText>
        <S.RegoinInput
          type="text"
          placeholder="지역을 입력해주세요."
          onChange={(e) => handleChange('region', e.target.value)}
          value={formData.region}
          required
        ></S.RegoinInput>
      </S.Region>
      <S.Time>
        <S.TimeText>식사 시간</S.TimeText>
        <S.TimeInput
          type="text"
          placeholder="식사 시간을 입력해주세요."
          onChange={(e) => handleChange('time', e.target.value)}
          value={formData.time}
          required
        ></S.TimeInput>
      </S.Time>
      <S.PeopleNum>
        <S.PeopleNumText>모집 인원</S.PeopleNumText>
        <S.PeopleNumSelect
          name="peopleNum"
          onChange={(e) => handleChange('peopleNum', e.target.value)}
          value={formData.peopleNum}
          required
        >
          <S.PeopleNumSelectOption value="" disabled>
            최대 5명
          </S.PeopleNumSelectOption>
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
            음주 가능
            <S.AlcholInput
              type="radio"
              id="alcholOk"
              name="alchol"
              onChange={() => handleChange('alchol', 'ok')}
              checked={formData.alchol === 'ok'}
              required
            ></S.AlcholInput>
            <S.AlcholCustomRadio></S.AlcholCustomRadio>
          </S.AlcholRadioLabel>
          <S.AlcholRadioLabel htmlFor="alcholNo">
            음주 불가능
            <S.AlcholInput
              type="radio"
              id="alcholNo"
              name="alchol"
              onChange={() => handleChange('alchol', 'nope')}
              checked={formData.alchol === 'nope'}
              required
            ></S.AlcholInput>
            <S.AlcholCustomRadio></S.AlcholCustomRadio>
          </S.AlcholRadioLabel>
        </S.AlcholRadio>
      </S.Alchol>
      <S.Gender>
        <S.GenderText>성별</S.GenderText>
        <S.GenderRadio>
          <S.GenderRadioLabel htmlFor="male">
            남자만
            <S.GenderInput
              type="radio"
              id="male"
              name="gender"
              onChange={() => handleChange('gender', 'male')}
              checked={formData.gender === 'male'}
              required
            ></S.GenderInput>
            <S.GenderCustomRadio></S.GenderCustomRadio>
          </S.GenderRadioLabel>
          <S.GenderRadioLabel htmlFor="female">
            여자만
            <S.GenderInput
              type="radio"
              id="female"
              name="gender"
              onChange={() => handleChange('gender', 'female')}
              checked={formData.gender === 'female'}
              required
            ></S.GenderInput>
            <S.GenderCustomRadio></S.GenderCustomRadio>
          </S.GenderRadioLabel>
          <S.GenderRadioLabel htmlFor="mix">
            상관없음
            <S.GenderInput
              type="radio"
              id="mix"
              name="gender"
              onChange={() => handleChange('gender', 'mix')}
              checked={formData.gender === 'mix'}
              required
            ></S.GenderInput>
            <S.GenderCustomRadio></S.GenderCustomRadio>
          </S.GenderRadioLabel>
        </S.GenderRadio>
      </S.Gender>
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
