import { useLocation, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';

import postApi from '@_apis/posts';
import * as S from './styles';

import { locationData } from '@_recoil/atoms/mapData';
import { eatTimeState } from '@_recoil/atoms/eatTimeState';
import { PostDataType } from '@_types/createBoard';

type CreateBoardContentType = {
  title: string;
  content: string;
  linkUrl: string;
}

const CreateBoardContent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const mapData = useRecoilValue(locationData);
  const resetMapData = useResetRecoilState(locationData);
  const resetEatTime = useResetRecoilState(eatTimeState);
  const eatTime = useRecoilValue(eatTimeState);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CreateBoardContentType>()

  const createBoard = useMutation({
    mutationFn: (postData: PostDataType) => postApi.postsBoards(postData),
    onSuccess: (data) => {
      resetMapData();
      resetEatTime()
      navigate('/');
      console.log('게시글 등록 성공:', data);
    },
    onError: (error) => {
      console.error('게시글 등록 실패:', error);
    },
  });

  const onSubmit = (data: CreateBoardContentType) => {
    const postData = {
      ...data,
      ...location.state,
      location: JSON.stringify(mapData),
      ...eatTime,
      fix: false,
      currentJoin: 1
    }
    const isLocationDataEmpty = !mapData || !mapData.location || !mapData.location.content;
    const isEatTimeDataEmpty = eatTime.eatTime === '';

    if (!isLocationDataEmpty && !isEatTimeDataEmpty) createBoard.mutate(postData);
    if (isLocationDataEmpty) alert('위치를 선택해주세요');
    if (isEatTimeDataEmpty) alert('식사 시간을 선택해주세요');
  }

  return (
    <S.CreateContentContainer>
      <S.TextBox>
        <S.InfoText>
          <S.InfoImg size={18} />
          게시글 내용을 입력해주세요.
        </S.InfoText>
      </S.TextBox>
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
        <S.PrevBtn
          onClick={() => {
            navigate(-1);
          }}
        >
          이전
        </S.PrevBtn>
        <S.registrationBtn onClick={handleSubmit(onSubmit)}>등록</S.registrationBtn>
      </S.BtnWrap>
    </S.CreateContentContainer >
  );
};

export default CreateBoardContent;
