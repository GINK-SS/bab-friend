import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';

import { locationData, locationStringSelector, postsState } from '@_recoil/atoms/posts';
import { errorMessageState } from '@_recoil/atoms/validationError';
import postApi from '@_apis/posts';
import Input from '@_components/common/Input';
import Textarea from '@_components/common/Textarea';
import * as S from './styles';

import infoCircle from '@_assets/images/svg/alert-circle.svg';

const CreateBoardContent = () => {
  const navigate = useNavigate();
  const [postState, setPostState] = useRecoilState(postsState);
  const [errorMessage, setErrorMessage] = useRecoilState(errorMessageState);
  const locationStringData = useRecoilValue(locationStringSelector);
  const mapData = useRecoilValue(locationData);
  const resetPostState = useResetRecoilState(postsState);
  const resetMapData = useResetRecoilState(locationData);

  const createBoard = useMutation({
    mutationFn: () => postApi.postsBoards({ ...postState, location: JSON.stringify(mapData) }),
    onSuccess: (data) => {
      resetPostState();
      resetMapData();
      navigate('/');
      console.log('게시글 등록 성공:', data);
    },
    onError: (error) => {
      console.error('게시글 등록 실패:', error);
    },
  });
  const handleChange = (name: string, value: string) => {
    setErrorMessage((prev) => ({
      ...prev,
      [`${name}Error`]: '',
    }));
    setPostState((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClickRegistration = () => {
    // 값이 빈 문자열인 경우가 하나라도 있는지 확인
    const isAnyFieldEmpty = Object.entries(postState)
      .filter(([key]) => key !== 'location')
      .some(([key, value]) => value === '');

    const isLocationDataEmpty = !mapData || !mapData.location || !mapData.location.content;

    if (!postState.title) {
      setErrorMessage((prev) => ({
        ...prev,
        titleError: '제목을 입력해주세요.',
      }));
      return;
    }
    if (!postState.content) {
      setErrorMessage((prev) => ({
        ...prev,
        contentError: '내용을 입력해주세요.',
      }));
      return;
    }

    if (!postState.linkUrl) {
      setErrorMessage((prev) => ({
        ...prev,
        linkUrlError: '링크를 입력해주세요.',
      }));
      return;
    }
    if (isAnyFieldEmpty || isLocationDataEmpty) {
      alert('모든 항목을 입력해주세요.');
    } else {
      createBoard.mutate();
    }
  };
  return (
    <S.CreateContentContainer>
      <S.TextBox>
        <S.InfoText>
          <S.InfoImg src={infoCircle} />
          게시글 내용을 입력해주세요.
        </S.InfoText>
      </S.TextBox>
      <S.Title>
        <Input
          type='text'
          placeholder='제목을 입력해주세요..'
          label='제목'
          value={postState.title}
          errorMessage={errorMessage?.titleError}
          onChange={(e) => handleChange('title', e.target.value)}
          maxLength={40}
        />
      </S.Title>
      <S.Content>
        <Textarea
          placeholder='내용을 입력해주세요..'
          label='내용'
          value={postState.content}
          errorMessage={errorMessage?.contentError}
          onChange={(e) => handleChange('content', e.target.value)}
          height={16}
        />
      </S.Content>
      <S.Link>
        <Input
          type='link'
          placeholder='링크(오픈채팅방)을 입력해주세요..'
          label='링크'
          value={postState.linkUrl}
          errorMessage={errorMessage?.linkUrlError}
          onChange={(e) => handleChange('linkUrl', e.target.value)}
          required
        />
      </S.Link>
      <S.BtnWrap>
        <S.PrevBtn
          onClick={() => {
            navigate(-1);
          }}
        >
          이전
        </S.PrevBtn>
        <S.registrationBtn onClick={handleClickRegistration}>등록</S.registrationBtn>
      </S.BtnWrap>
    </S.CreateContentContainer>
  );
};

export default CreateBoardContent;
