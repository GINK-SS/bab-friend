import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';
import Calendar from '../Calendar';
import KakaoMap from '@_components/Modal/KakaoMap';

import { BoardDetailInfo } from '@_types/board';

import * as S from './styles';
import UpdateBoard from '@_components/UpdateBoard';
import Modal from '@_components/Modal';
import { ModalName, modalState } from '@_recoil/atoms/modal';
import { locationData } from '@_recoil/atoms/mapData';
import KakaoStaticMap from '@_components/KakaoStaticMap';

export type SelectOptionProps = {
  updating: boolean;
  boardDetailInfo: BoardDetailInfo;
};

const SelectBoardOption = ({ updating, boardDetailInfo }: SelectOptionProps) => {
  const navigate = useNavigate();
  const setModal = useSetRecoilState(modalState);
  const mapData = useRecoilValue(locationData);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      categoryType: '',
      joinLimit: '',
      priceRange: '',
      alcohol: 'false',
      ageGroupLimit: 'false',
      genderType: 'ALL'
    }
  })
  const onSubmit = (data: any) => {
    const AlcoholBoolean = data.alchol === 'true' ? true : false
    const AgeLimitBoolean = data.ageGroupLimit === 'true' ? true : false
    navigate('/createcontent', { state: { ...data, alchol: AlcoholBoolean, ageGroupLimit: AgeLimitBoolean } })
  }
  return (
    <S.SelectOptionContainer >
      {updating ? (
        <>
          <UpdateBoard updating={updating} boardDetailInfo={boardDetailInfo} />
        </>
      ) : (
        <>
          <S.FoodType>
            <S.FoodTypeText>음식 종류</S.FoodTypeText>
            <select {...register("categoryType", { required: true })} >
              <option value="">음식 종류 선택</option>
              <option value="ALL">상관 없음</option>
              <option value="KOREAN">한식</option>
              <option value="WEST">양식</option>
              <option value="CHINA">중식</option>
              <option value="JAPAN">일식</option>
            </select>
            {errors.categoryType?.type === "required" && (
              <S.ErrorMessage>음식 종류를 선택해주세요.</S.ErrorMessage>
            )}
          </S.FoodType>
          <S.Price>
            <label htmlFor='priceRange'>예상 가격</label>
            <input type='number' id='priceRange' {...register("priceRange", {
              required: true, maxLength: 6,
              validate: {
                notNegative: value => parseInt(value) > 0
              },
              valueAsNumber: true
            })}
              placeholder='예상 가격을 입력해주세요.'
            />
            {errors.priceRange?.type === "required" && (
              <S.ErrorMessage> * 예상 가격을 입력해주세요.</S.ErrorMessage>
            )}
            {errors.priceRange && errors.priceRange.type === "maxLength" && (
              <S.ErrorMessage> * 예상 가격은 100만원 이상은 불가합니다.</S.ErrorMessage>
            )}
            {errors.priceRange && errors.priceRange.type === "notNegative" && (
              <S.ErrorMessage> * 음수는 입력할 수 없습니다.</S.ErrorMessage>
            )}
          </S.Price>
          <S.PeopleNum>
            <S.PeopleNumText>모집 인원</S.PeopleNumText>
            <select {...register("joinLimit", { required: true, valueAsNumber: true })} >
              <option value="">모집 인원 선택</option>
              <option value={2}>2명</option>
              <option value={3}>3명</option>
              <option value={4}>4명</option>
              <option value={5}>5명</option>
            </select>
            {errors.categoryType?.type === "required" && (
              <S.ErrorMessage> * 모집 인원을 선택해주세요.</S.ErrorMessage>
            )}
          </S.PeopleNum>
          <S.Time>
            <S.TimeText>식사 시간</S.TimeText>
            <Calendar />
          </S.Time>
          <S.StoreNameWrap>
            <S.StoreNameLabel>가게명을 입력해주세요.</S.StoreNameLabel>
            <S.StoreBtn
              onClick={() => {
                setModal({ name: ModalName.kakaoMap, isActive: true });
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
                <KakaoStaticMap
                  center={{
                    lat: mapData.location.position.lat,
                    lng: mapData.location.position.lng,
                  }}
                  height={200}
                  content={mapData.location.content}
                />
              </>
            )}
            <Modal name={ModalName.kakaoMap}>
              <KakaoMap />
            </Modal>
          </S.StoreNameWrap>
          <S.Alchol>
            <S.AlcholText>술 여부</S.AlcholText>
            <S.AlcholRadio>
              <S.AlcholRadioLabel htmlFor='alcohol'>
                음주 가능
                <S.AlcholInput
                  {...register("alcohol")}
                  id='alcohol'
                  type='radio'
                  value="true"
                />
                <S.AlcholCustomRadio></S.AlcholCustomRadio>
              </S.AlcholRadioLabel>
              <S.AlcholRadioLabel htmlFor='no-alcohol'>
                음주 불가능
                <S.AlcholInput
                  {...register("alcohol")}
                  id='no-alcohol'
                  type='radio'
                  value="false"
                />
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
                  {...register("ageGroupLimit")}
                  type='radio'
                  id='AgeLimit'
                  value="true"
                ></S.AgeLimitInput>
                <S.AgeLimitCustomRadio></S.AgeLimitCustomRadio>
              </S.AgeLimitRadioLabel>
              <S.AgeLimitRadioLabel htmlFor='NotAgeLimit'>
                X
                <S.AgeLimitInput
                  {...register("ageGroupLimit")}
                  type='radio'
                  id='NotAgeLimit'
                  value="false"
                ></S.AgeLimitInput>
                <S.AgeLimitCustomRadio></S.AgeLimitCustomRadio>
              </S.AgeLimitRadioLabel>
            </S.AgeLimitRadio>
          </S.AgeLimitWrap>
          <S.Gender>
            <S.GenderText>성별</S.GenderText>
            <S.GenderRadio>
              <S.GenderRadioLabel htmlFor='MALE'>
                남자만
                <S.GenderInput
                  {...register("genderType")}
                  type='radio'
                  id='MALE'
                  value="MALE"
                ></S.GenderInput>
                <S.GenderCustomRadio></S.GenderCustomRadio>
              </S.GenderRadioLabel>
              <S.GenderRadioLabel htmlFor='FEMALE'>
                여자만
                <S.GenderInput
                  {...register("genderType")}
                  type='radio'
                  id='FEMALE'
                  value="FEMALE"
                ></S.GenderInput>
                <S.GenderCustomRadio></S.GenderCustomRadio>
              </S.GenderRadioLabel>
              <S.GenderRadioLabel htmlFor='ALL'>
                상관없음
                <S.GenderInput
                  {...register("genderType")}
                  type='radio'
                  id='ALL'
                  value="ALL"
                ></S.GenderInput>
                <S.GenderCustomRadio></S.GenderCustomRadio>
              </S.GenderRadioLabel>
            </S.GenderRadio>
          </S.Gender>
          <S.NextBtnWrap>
            <S.NextBtn onClick={handleSubmit(onSubmit)}>다음</S.NextBtn>
          </S.NextBtnWrap>
        </>
      )}
    </S.SelectOptionContainer>
  );
};

export default SelectBoardOption;
