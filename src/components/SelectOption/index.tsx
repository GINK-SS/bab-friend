import * as S from './styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import { FormDataType } from '../../types/createPost';
import Calendar from '../Calendar';
import KakaoMapModal from '../KakaoMapModal';

const SelectOption = () => {
  const navigate = useNavigate();
  // 지도에서 클릭한 장소의 정보를 담을 상태
  const [formData, setFormData] = useState<FormDataType>({
    categoryType: '',
    eatTime: '',
    joinLimit: '',
    alchol: false,
    fix: false,
    gender: 'ALL',
    priceRange: 0,
    ageGroupLimit: false,
    location: {
      content: '',
      position: {
        lat: '',
        lng: '',
      },
    },
  });
  const [mapModalOpen, setMapModalOpen] = useState(false);
  console.log(formData);
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
          <S.PeopleNumSelectOption value='1'>1명</S.PeopleNumSelectOption>
          <S.PeopleNumSelectOption value='2'>2명</S.PeopleNumSelectOption>
          <S.PeopleNumSelectOption value='3'>3명</S.PeopleNumSelectOption>
          <S.PeopleNumSelectOption value='4'>4명</S.PeopleNumSelectOption>
          <S.PeopleNumSelectOption value='5'>5명</S.PeopleNumSelectOption>
        </S.PeopleNumSelect>
      </S.PeopleNum>
      <S.Time>
        <S.TimeText>식사 시간</S.TimeText>
        <Calendar formData={formData} setFormData={setFormData} />
      </S.Time>
      <S.StoreNameWrap>
        <S.StoreName>가게명을 입력해주세요.</S.StoreName>
        <S.StoreBtn
          onClick={() => {
            setMapModalOpen(!mapModalOpen);
          }}
        >
          가게명 검색하기
        </S.StoreBtn>
        <S.StoreName>{formData.location.content}</S.StoreName>
        {mapModalOpen && (
          <KakaoMapModal setMapModalOpen={setMapModalOpen} formData={formData} setFormData={setFormData} />
        )}
      </S.StoreNameWrap>
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
      <S.AgeLimitWrap>
        <S.AgeLimitText>연령 제한</S.AgeLimitText>
        <S.AgeLimitRadio>
          <S.AgeLimitRadioLabel htmlFor='AgeLimit'>
            O
            <S.AgeLimitInput
              type='radio'
              id='AgeLimit'
              name='ageGroupLimit'
              onChange={() => handleChange('ageGroupLimit', true)}
              checked={formData.ageGroupLimit === true}
              required
            ></S.AgeLimitInput>
            <S.AgeLimitCustomRadio></S.AgeLimitCustomRadio>
          </S.AgeLimitRadioLabel>
          <S.AgeLimitRadioLabel htmlFor='NotAgeLimit'>
            X
            <S.AgeLimitInput
              type='radio'
              id='NotAgeLimit'
              name='ageGroupLimit'
              onChange={() => handleChange('ageGroupLimit', false)}
              checked={formData.ageGroupLimit === false}
              required
            ></S.AgeLimitInput>
            <S.AgeLimitCustomRadio></S.AgeLimitCustomRadio>
          </S.AgeLimitRadioLabel>
        </S.AgeLimitRadio>
      </S.AgeLimitWrap>
      <S.Gender>
        <S.GenderText>성별</S.GenderText>
        <S.GenderRadio>
          <S.GenderRadioLabel htmlFor='male'>
            남자만
            <S.GenderInput
              type='radio'
              id='male'
              name='gender'
              onChange={() => handleChange('gender', 'MALE')}
              checked={formData.gender === 'MALE'}
              required
            ></S.GenderInput>
            <S.GenderCustomRadio></S.GenderCustomRadio>
          </S.GenderRadioLabel>
          <S.GenderRadioLabel htmlFor='FEMAIL'>
            여자만
            <S.GenderInput
              type='radio'
              id='FEMAIL'
              name='gender'
              onChange={() => handleChange('gender', 'FEMAIL')}
              checked={formData.gender === 'FEMAIL'}
              required
            ></S.GenderInput>
            <S.GenderCustomRadio></S.GenderCustomRadio>
          </S.GenderRadioLabel>
          <S.GenderRadioLabel htmlFor='ALL'>
            상관없음
            <S.GenderInput
              type='radio'
              id='ALL'
              name='gender'
              onChange={() => handleChange('gender', 'ALL')}
              checked={formData.gender === 'ALL'}
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
