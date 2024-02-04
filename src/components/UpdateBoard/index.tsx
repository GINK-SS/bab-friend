import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { StaticMap } from 'react-kakao-maps-sdk';
import { useMutation } from '@tanstack/react-query';

import { SelectOptionProps } from '@_components/SelectBoardOption';
import Input from '@_components/common/Input';
import Calendar from '@_components/Calendar';
import KakaoMapModal from '@_components/KakaoMapModal';
import Textarea from '@_components/common/Textarea';
import { locationData } from '@_recoil/atoms/posts';
import boardApi from '@_apis/board';
import { UpdatePost } from '@_types/createBoard';

import * as S from './styles';

import infoCircle from '@_assets/images/svg/alert-circle.svg';

const UpdateBoard = ({ boardDetailInfo, updating }: SelectOptionProps) => {
  const navigate = useNavigate();
  const [mapModalOpen, setMapModalOpen] = useState(false);
  const mapData = useRecoilValue(locationData);
  const [updatePostState, setUpdatePostState] = useState<UpdatePost>({
    title: boardDetailInfo.title,
    content: boardDetailInfo.content,
    location: boardDetailInfo.location,
    categoryType: boardDetailInfo.categoryType,
    eatTime: boardDetailInfo.eatTime,
    alcohol: boardDetailInfo.alcohol,
    joinLimit: boardDetailInfo.joinLimit,
    ageGroupLimit: boardDetailInfo.ageGroupLimit,
    genderType: boardDetailInfo.genderType,
    linkUrl: boardDetailInfo.linkUrl,
    priceRange: boardDetailInfo.priceRange,
  });
  const categoryTypeToKorean = {
    KOREAN: '한식',
    JAPAN: '일식',
    CHINA: '중식',
    WEST: '양식',
    ALL: '상관없음',
  };
  const handleChange = (name: string, value: string | number | boolean) => {
    setUpdatePostState((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const editBoard = useMutation({
    mutationFn: () =>
      boardApi.updateBoard(boardDetailInfo.id, { ...updatePostState, location: JSON.stringify(mapData) }),
    onSuccess: (data) => {
      navigate(`/boarddetail/${boardDetailInfo.id}`);
      console.log('게시글 수정 완료', data);
    },
    onError: (error) => {
      console.error('게시글 수정 실패:', error);
    },
  });
  return (
    <>
      <S.FoodType>
        <S.FoodTypeText>음식 종류</S.FoodTypeText>
        <S.FoodTypeSelect
          name='categoryType'
          onChange={(e) => handleChange('categoryType', e.target.value)}
          value={updatePostState?.categoryType}
          required
        >
          <S.FoodTypeSelectOption value='' disabled>
            {categoryTypeToKorean[boardDetailInfo.categoryType]}
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
          value={updatePostState?.priceRange}
          onChange={(e) => handleChange('priceRange', e.target.value)}
        />
      </S.Menu>
      <S.PeopleNum>
        <S.PeopleNumText>모집 인원</S.PeopleNumText>
        <S.PeopleNumSelect
          name='joinLimit'
          onChange={(e) => handleChange('joinLimit', e.target.value)}
          value={updatePostState.joinLimit}
          required
        >
          <S.PeopleNumSelectOption value='' disabled>
            예상 인원을 선택하세요.
          </S.PeopleNumSelectOption>
          <S.PeopleNumSelectOption value={2}>2명</S.PeopleNumSelectOption>
          <S.PeopleNumSelectOption value={3}>3명</S.PeopleNumSelectOption>
          <S.PeopleNumSelectOption value={4}>4명</S.PeopleNumSelectOption>
          <S.PeopleNumSelectOption value={5}>5명</S.PeopleNumSelectOption>
        </S.PeopleNumSelect>
      </S.PeopleNum>
      <S.Time>
        <S.TimeText>식사 시간</S.TimeText>
        <Calendar updateEatTime={updatePostState.eatTime} setUpdatePostState={setUpdatePostState} updating={updating} />
      </S.Time>
      <S.StoreNameWrap>
        <S.StoreNameLabel>가게명을 입력해주세요.</S.StoreNameLabel>
        <S.StoreBtn
          onClick={() => {
            setMapModalOpen(true);
          }}
        >
          가게명 검색하기
        </S.StoreBtn>
        {mapData.location.content === '' ? (
          <>
            <S.StoreInfo>
              <S.StoreAddress>위치 : {boardDetailInfo.location.address}</S.StoreAddress>
              <S.StoreName>가게명 : {boardDetailInfo.location?.location?.content}</S.StoreName>
            </S.StoreInfo>
            <StaticMap
              center={{
                lat: boardDetailInfo.location?.location?.position.lat,
                lng: boardDetailInfo.location?.location?.position.lng,
              }}
              style={{
                width: '100%',
                height: '200px',
              }}
              marker={[
                {
                  position: {
                    lat: boardDetailInfo.location?.location?.position.lat,
                    lng: boardDetailInfo.location?.location?.position.lng,
                  },
                  text: boardDetailInfo.location?.location?.content,
                },
              ]}
              level={3}
            />
          </>
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
              checked={updatePostState.alcohol === true}
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
              checked={updatePostState.alcohol === false}
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
              checked={updatePostState.ageGroupLimit === true}
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
              checked={updatePostState.ageGroupLimit === false}
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
              checked={updatePostState.genderType === 'MALE'}
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
              checked={updatePostState.genderType === 'FEMALE'}
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
              checked={updatePostState.genderType === 'ALL'}
              required
            ></S.GenderInput>
            <S.GenderCustomRadio></S.GenderCustomRadio>
          </S.GenderRadioLabel>
        </S.GenderRadio>
      </S.Gender>
      <S.CreateContentContainer>
        <S.Title>
          <Input
            type='text'
            placeholder='제목을 입력해주세요..'
            label='제목'
            value={updatePostState.title}
            onChange={(e) => handleChange('title', e.target.value)}
          />
        </S.Title>
        <S.Content>
          <Textarea
            placeholder='내용을 입력해주세요..'
            label='내용'
            value={updatePostState.content}
            onChange={(e) => handleChange('content', e.target.value)}
          />
        </S.Content>
        <S.Link>
          <Input
            type='text'
            placeholder='링크(오픈채팅방)을 입력해주세요..'
            label='링크'
            value={updatePostState.linkUrl}
            onChange={(e) => handleChange('linkUrl', e.target.value)}
          />
        </S.Link>
        <S.BtnWrap>
          <S.CancleBtn
            onClick={() => {
              navigate(-1);
            }}
          >
            취소하기
          </S.CancleBtn>
          <S.editBtn
            onClick={() => {
              editBoard.mutate();
            }}
          >
            수정하기
          </S.editBtn>
        </S.BtnWrap>
      </S.CreateContentContainer>
    </>
  );
};

export default UpdateBoard;
