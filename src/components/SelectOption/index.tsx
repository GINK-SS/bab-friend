import * as S from './styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import { FormDataType } from '../../types/createPost';
import Calendar from '../Calendar';

const SelectOption = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormDataType>({
    categoryType: '',
    eatTime: '',
    joinLimit: '',
    alchol: true,
    gender: '',
    priceRange: 0,
  });

  const handleChange = (name: string, value: string | number | boolean) => {
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
          name='categoryType'
          onChange={(e) => handleChange('categoryType', e.target.value)}
          value={formData.categoryType}
          required
        >
          <S.FoodTypeSelectOption value='' disabled>
            음식 카테고리
          </S.FoodTypeSelectOption>
          <S.FoodTypeSelectOption value='KOREAN'>한식</S.FoodTypeSelectOption>
          <S.FoodTypeSelectOption value='JAPAN'>일식</S.FoodTypeSelectOption>
          <S.FoodTypeSelectOption value='CHINA'>중식</S.FoodTypeSelectOption>
          <S.FoodTypeSelectOption value='WEST'>양식</S.FoodTypeSelectOption>
        </S.FoodTypeSelect>
      </S.FoodType>
      <S.Menu>
        <S.MenuText>예상 가격</S.MenuText>
        <S.MenuInput
          type='text'
          placeholder='예상 가격을 입력해주세요.'
          onChange={(e) => handleChange('priceRange', e.target.value)}
          value={formData.priceRange}
          required
        ></S.MenuInput>
      </S.Menu>
      <S.Time>
        <S.TimeText>식사 시간</S.TimeText>
        <Calendar />
      </S.Time>
      <S.PeopleNum>
        <S.PeopleNumText>모집 인원</S.PeopleNumText>
        <S.PeopleNumSelect
          name='joinLimit'
          onChange={(e) => handleChange('joinLimit', e.target.value)}
          value={formData.joinLimit}
          required
        >
          <S.PeopleNumSelectOption value='' disabled>
            최대 5명
          </S.PeopleNumSelectOption>
          <S.PeopleNumSelectOption value='1person'>1명</S.PeopleNumSelectOption>
          <S.PeopleNumSelectOption value='2person'>2명</S.PeopleNumSelectOption>
          <S.PeopleNumSelectOption value='3person'>3명</S.PeopleNumSelectOption>
          <S.PeopleNumSelectOption value='4person'>4명</S.PeopleNumSelectOption>
          <S.PeopleNumSelectOption value='5person'>5명</S.PeopleNumSelectOption>
        </S.PeopleNumSelect>
      </S.PeopleNum>
      <S.Alchol>
        <S.AlcholText>술 여부</S.AlcholText>
        <S.AlcholRadio>
          <S.AlcholRadioLabel htmlFor='alcholOk'>
            음주 가능
            <S.AlcholInput
              type='radio'
              id='alcholOk'
              name='alchol'
              onChange={() => handleChange('alchol', true)}
              checked={formData.alchol === true}
              required
            ></S.AlcholInput>
            <S.AlcholCustomRadio></S.AlcholCustomRadio>
          </S.AlcholRadioLabel>
          <S.AlcholRadioLabel htmlFor='alcholNo'>
            음주 불가능
            <S.AlcholInput
              type='radio'
              id='alcholNo'
              name='alchol'
              onChange={() => handleChange('alchol', false)}
              checked={formData.alchol === false}
              required
            ></S.AlcholInput>
            <S.AlcholCustomRadio></S.AlcholCustomRadio>
          </S.AlcholRadioLabel>
        </S.AlcholRadio>
      </S.Alchol>
      <S.Gender>
        <S.GenderText>성별</S.GenderText>
        <S.GenderRadio>
          <S.GenderRadioLabel htmlFor='male'>
            남자만
            <S.GenderInput
              type='radio'
              id='male'
              name='gender'
              onChange={() => handleChange('gender', 'male')}
              checked={formData.gender === 'male'}
              required
            ></S.GenderInput>
            <S.GenderCustomRadio></S.GenderCustomRadio>
          </S.GenderRadioLabel>
          <S.GenderRadioLabel htmlFor='female'>
            여자만
            <S.GenderInput
              type='radio'
              id='female'
              name='gender'
              onChange={() => handleChange('gender', 'female')}
              checked={formData.gender === 'female'}
              required
            ></S.GenderInput>
            <S.GenderCustomRadio></S.GenderCustomRadio>
          </S.GenderRadioLabel>
          <S.GenderRadioLabel htmlFor='mix'>
            상관없음
            <S.GenderInput
              type='radio'
              id='mix'
              name='gender'
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
