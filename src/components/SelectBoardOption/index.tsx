import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Calendar from '../Calendar';
import KakaoMapModal from '../KakaoMapModal';
import Input from '@_components/common/Input';

import { useRecoilState, useRecoilValue } from 'recoil';
import { locationData, postsState } from '@_recoil/atoms/posts';
import { StaticMap } from 'react-kakao-maps-sdk';
import { errorMessageState } from '@_recoil/atoms/validationError';
import { BoardDetailInfo } from '@_types/board';

import * as S from './styles';
import UpdateBoard from '@_components/UpdateBoard';

export type SelectOptionProps = {
  updating: boolean;
  boardDetailInfo: BoardDetailInfo;
};

const SelectBoardOption = ({ updating, boardDetailInfo }: SelectOptionProps) => {
  const navigate = useNavigate();
  const [postState, setPostState] = useRecoilState(postsState);
  const [errorMessage, setErrorMessage] = useRecoilState(errorMessageState);
  const [mapModalOpen, setMapModalOpen] = useState(false);
  const mapData = useRecoilValue(locationData);

  const handleChange = (name: string, value: string | number | boolean) => {
    setErrorMessage((prev) => ({
      ...prev,
      [`${name}Error`]: '',
    }));
    setPostState((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClickNextBtn = () => {
    if (postState.priceRange === 0) {
      setErrorMessage((prev) => ({
        ...prev,
        priceRangeError: '예상가격을 입력해주세요.',
      }));
      return;
    }
    navigate('/createcontent');
  };

  return (
    <S.SelectOptionContainer>
      {updating ? (
        <>
          <UpdateBoard updating={updating} boardDetailInfo={boardDetailInfo} />
        </>
      ) : (
        <>
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
              <S.FoodTypeSelectOption value='ALL'>상관없음</S.FoodTypeSelectOption>
              <S.FoodTypeSelectOption value='KOREAN'>한식</S.FoodTypeSelectOption>
              <S.FoodTypeSelectOption value='JAPAN'>일식</S.FoodTypeSelectOption>
              <S.FoodTypeSelectOption value='CHINA'>중식</S.FoodTypeSelectOption>
              <S.FoodTypeSelectOption value='WEST'>양식</S.FoodTypeSelectOption>
            </S.FoodTypeSelect>
          </S.FoodType>
          <S.Menu>
            <Input
              type='number'
              placeholder='예상가격을 입력해주세요..'
              label='예상가격'
              value={postState.priceRange}
              errorMessage={errorMessage?.priceRangeError}
              onChange={(e) => handleChange('priceRange', e.target.value)}
            />
          </S.Menu>
          <S.PeopleNum>
            <S.PeopleNumText>모집 인원</S.PeopleNumText>
            <S.PeopleNumSelect
              name='joinLimit'
              onChange={(e) => handleChange('joinLimit', e.target.value)}
              value={postState.joinLimit}
              required
            >
              <S.PeopleNumSelectOption value='' disabled>
                예상 인원을 선택하세요.
              </S.PeopleNumSelectOption>
              <S.PeopleNumSelectOption value={1}>1명</S.PeopleNumSelectOption>
              <S.PeopleNumSelectOption value={2}>2명</S.PeopleNumSelectOption>
              <S.PeopleNumSelectOption value={3}>3명</S.PeopleNumSelectOption>
              <S.PeopleNumSelectOption value={4}>4명</S.PeopleNumSelectOption>
              <S.PeopleNumSelectOption value={5}>5명</S.PeopleNumSelectOption>
            </S.PeopleNumSelect>
          </S.PeopleNum>
          <S.Time>
            <S.TimeText>식사 시간</S.TimeText>
            <Calendar />
          </S.Time>
          <S.StoreNameWrap>
            <S.StoreNameLabel>가게명을 입력해주세요.</S.StoreNameLabel>
            <S.StoreBtn
              onClick={() => {
                setMapModalOpen(!mapModalOpen);
              }}
            >
              가게명 검색하기
            </S.StoreBtn>

            {mapData.location.content === '' ? (
              <></>
            ) : (
              <>
                <S.StoreInfo>
                  <S.StoreAddress>위치 : {mapData.address}</S.StoreAddress>
                  <S.StoreName>가게명 : {mapData.location.content}</S.StoreName>
                </S.StoreInfo>
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
              </>
            )}
            {mapModalOpen && <KakaoMapModal setMapModalOpen={setMapModalOpen} />}
          </S.StoreNameWrap>
          <S.Alchol>
            <S.AlcholText>술 여부</S.AlcholText>
            <S.AlcholRadio>
              <S.AlcholRadioLabel htmlFor='alcoholOk'>
                음주 가능
                <S.AlcholInput
                  type='radio'
                  id='alcoholOk'
                  name='alcohol'
                  onChange={() => handleChange('alcohol', true)}
                  checked={postState.alcohol === true}
                  required
                ></S.AlcholInput>
                <S.AlcholCustomRadio></S.AlcholCustomRadio>
              </S.AlcholRadioLabel>
              <S.AlcholRadioLabel htmlFor='alcoholNo'>
                음주 불가능
                <S.AlcholInput
                  type='radio'
                  id='alcoholNo'
                  name='alcohol'
                  onChange={() => handleChange('alcohol', false)}
                  checked={postState.alcohol === false}
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
                  name='genderType'
                  onChange={() => handleChange('genderType', 'MALE')}
                  checked={postState.genderType === 'MALE'}
                  required
                ></S.GenderInput>
                <S.GenderCustomRadio></S.GenderCustomRadio>
              </S.GenderRadioLabel>
              <S.GenderRadioLabel htmlFor='FEMALE'>
                여자만
                <S.GenderInput
                  type='radio'
                  id='FEMALE'
                  name='genderType'
                  onChange={() => handleChange('genderType', 'FEMALE')}
                  checked={postState.genderType === 'FEMALE'}
                  required
                ></S.GenderInput>
                <S.GenderCustomRadio></S.GenderCustomRadio>
              </S.GenderRadioLabel>
              <S.GenderRadioLabel htmlFor='ALL'>
                상관없음
                <S.GenderInput
                  type='radio'
                  id='ALL'
                  name='genderType'
                  onChange={() => handleChange('genderType', 'ALL')}
                  checked={postState.genderType === 'ALL'}
                  required
                ></S.GenderInput>
                <S.GenderCustomRadio></S.GenderCustomRadio>
              </S.GenderRadioLabel>
            </S.GenderRadio>
          </S.Gender>
          <S.NextBtnWrap>
            <S.NextBtn onClick={handleClickNextBtn}>다음</S.NextBtn>
          </S.NextBtnWrap>
        </>
      )}
    </S.SelectOptionContainer>
  );
};

export default SelectBoardOption;
