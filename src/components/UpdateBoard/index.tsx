import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import { SelectOptionProps } from '@_components/SelectBoardOption';
import Calendar from '@_components/Calendar';
import KakaoMap from '@_components/Modal/KakaoMap';
import KakaoStaticMap from '@_components/KakaoStaticMap';
import Modal from '@_components/Modal';
import { locationData } from '@_recoil/atoms/mapData';
import { ModalName, modalState } from '@_recoil/atoms/modal';
import boardApi from '@_apis/board';
import { UpdatePost, UpdatePostRequest } from '@_types/createBoard';
import { eatTimeState } from '@_recoil/atoms/eatTimeState';

import * as S from './styles';

const UpdateBoard = ({ boardDetailInfo }: SelectOptionProps) => {
  const navigate = useNavigate();
  const mapData = useRecoilValue(locationData);
  const resetMapData = useResetRecoilState(locationData);
  const resetEatTime = useResetRecoilState(eatTimeState);
  const setModal = useSetRecoilState(modalState);
  const eatTime = useRecoilValue(eatTimeState);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      categoryType: boardDetailInfo.categoryType,
      joinLimit: boardDetailInfo.joinLimit,
      priceRange: boardDetailInfo.priceRange,
      alcohol: String(boardDetailInfo.alcohol),
      ageGroupLimit: String(boardDetailInfo.ageGroupLimit),
      genderType: boardDetailInfo.genderType,
      title: boardDetailInfo.title,
      content: boardDetailInfo.content,
      location: boardDetailInfo.location,
      eatTime: eatTime.eatTime,
      linkUrl: boardDetailInfo.linkUrl,
    }
  })

  const editBoard = useMutation({
    mutationFn: (updateData: UpdatePostRequest) => {
      return boardApi.updateBoard(boardDetailInfo.id, updateData);
    },
    onSuccess: (data) => {
      resetMapData();
      resetEatTime()
      navigate(`/boarddetail/${boardDetailInfo.id}`, { replace: true });
      console.log('게시글 수정 완료', data);
    },
    onError: (error) => {
      console.error('게시글 수정 실패:', error);
    },
  });
  const onSubmit = (data: UpdatePost) => {
    const updateData = {
      ...data,
      alcohol: data.alcohol === 'true' ? true : false,
      ageGroupLimit: data.ageGroupLimit === 'true' ? true : false,
      eatTime: eatTime.eatTime,
      location: mapData.address === '' ? JSON.stringify(data.location) : JSON.stringify(mapData)
    };
    const isEatTimeDataEmpty = eatTime.eatTime === '';
    if (isEatTimeDataEmpty) alert('식사 시간을 선택해주세요');
    else editBoard.mutate(updateData);
  }

  return (
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
        {!mapData || mapData.address === '' ? (
          <>
            <S.StoreInfo>
              <S.StoreAddress>위치 : {boardDetailInfo.location.address}</S.StoreAddress>
              <S.StoreName>가게명 : {boardDetailInfo.location?.location?.content}</S.StoreName>
            </S.StoreInfo>

            <KakaoStaticMap
              center={{
                lat: boardDetailInfo.location?.location?.position.lat,
                lng: boardDetailInfo.location?.location?.position.lng,
              }}
              content={boardDetailInfo.location?.location?.content}
              height={200}
            />
          </>
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
              content={mapData.location.content}
              height={200}
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
          <S.AlcoholRadioLabel htmlFor='alcohol'>
            음주 가능
            <S.AlcoholInput
              {...register("alcohol")}
              id='alcohol'
              type='radio'
              value="true"
            />
            <S.AlcoholCustomRadio></S.AlcoholCustomRadio>
          </S.AlcoholRadioLabel>
          <S.AlcoholRadioLabel htmlFor='no-alcohol'>
            음주 불가능
            <S.AlcoholInput
              {...register("alcohol")}
              id='no-alcohol'
              type='radio'
              value="false"
            />
            <S.AlcoholCustomRadio></S.AlcoholCustomRadio>
          </S.AlcoholRadioLabel>
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
      <S.CreateContentContainer>
        <S.Title>
          <label>제목</label>
          <input type='text' {...register("title", { required: true, maxLength: 40, })}
            placeholder='제목을 입력해주세요..' />
          {errors.title?.type === "required" && (
            <S.ErrorMessage> * 제목을 입력해주세요.</S.ErrorMessage>
          )}
          {errors.title?.type === "maxLength" && (
            <S.ErrorMessage> * 최대 40글자 입력하세요.</S.ErrorMessage>
          )}
        </S.Title>
        <S.Content>
          <label>내용</label>
          <textarea  {...register("content", { required: true, maxLength: 500, })}
            placeholder='내용을 입력해주세요..' />
          {errors.content?.type === "required" && (
            <S.ErrorMessage> * 내용을 입력해주세요.</S.ErrorMessage>
          )}
          {errors.content?.type === "maxLength" && (
            <S.ErrorMessage> * 최대 500글자 입력하세요.</S.ErrorMessage>
          )}
        </S.Content>
        <S.Link>
          <label>링크</label>
          <input type='text' {...register("linkUrl", {
            required: true,
            pattern: {
              value: /(http(s)?:\/\/)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/gi,
              message: "올바른 링크를 입력해주세요."
            }
          })}
            placeholder='제목을 입력해주세요..' />
          {errors.linkUrl?.type === "required" && (
            <S.ErrorMessage> * 링크를 입력해주세요.</S.ErrorMessage>
          )}
          {errors.linkUrl?.type === "pattern" && (
            <S.ErrorMessage> * 올바른 링크를 입력해주세요.</S.ErrorMessage>
          )}
        </S.Link>
        <S.BtnWrap>
          <S.CancelBtn
            onClick={() => {
              navigate(-1);
            }}
          >
            취소하기
          </S.CancelBtn>
          <S.editBtn onClick={handleSubmit(onSubmit)}>수정하기</S.editBtn>
        </S.BtnWrap>
      </S.CreateContentContainer>
    </>
  );
};

export default UpdateBoard;
