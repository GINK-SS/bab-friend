import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import Calendar from '../Calendar';
import KakaoMapModal from '../KakaoMapModal';
import { useRecoilState } from 'recoil';
import { locationData, postsState } from '@_recoil/atoms/posts';
import { StaticMap } from 'react-kakao-maps-sdk';

const SelectOption = () => {
  const navigate = useNavigate();
  // 지도에서 클릭한 장소의 정보를 담을 상태
  const [postState, setPostState] = useRecoilState(postsState);
  const [mapModalOpen, setMapModalOpen] = useState(false);
  const [mapData, setMapData] = useRecoilState(locationData);
  const handleChange = (name: string, value: string | number | boolean) => {
    setPostState((prevData) => ({
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
          value={postState.categoryType}
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
          type='number'
          placeholder='예상 가격을 입력해주세요.'
          onChange={(e) => handleChange('priceRange', parseInt(e.target.value))}
          value={postState.priceRange}
          maxLength={7}
          required
        ></S.MenuInput>
      </S.Menu>
      <S.PeopleNum>
        <S.PeopleNumText>모집 인원</S.PeopleNumText>
        <S.PeopleNumSelect
          name='joinLimit'
          onChange={(e) => handleChange('joinLimit', parseInt(e.target.value))}
          value={postState.joinLimit}
          required
        >
          <S.PeopleNumSelectOption value='' disabled>
            예상 인원을 선택하세요.
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
        <Calendar postState={postState} setPostState={setPostState} />
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
        <S.StoreName>{mapData.location.content}</S.StoreName>
        {mapData.location.content === '' ? (
          <></>
        ) : (
          <StaticMap
            center={{
              lat: mapData.location.position.lat,
              lng: mapData.location.position.lng,
            }}
            style={{
              width: '100%',
              height: '200px',
            }}
            marker={[
              {
                position: {
                  lat: mapData.location.position.lat,
                  lng: mapData.location.position.lng,
                },
                text: mapData.location.content,
              },
            ]}
            level={3}
          />
        )}
        {mapModalOpen && (
          <KakaoMapModal setMapModalOpen={setMapModalOpen} postState={postState} setPostState={setPostState} />
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
              checked={postState.alchol === true}
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
              checked={postState.alchol === false}
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
              checked={postState.ageGroupLimit === true}
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
              checked={postState.ageGroupLimit === false}
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
              checked={postState.gender === 'MALE'}
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
              checked={postState.gender === 'FEMAIL'}
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
              checked={postState.gender === 'ALL'}
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
              state: { ...postState },
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
