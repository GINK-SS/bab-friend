import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { useRecoilState, useRecoilValue } from 'recoil';

import * as S from './styles';
import { userState } from '../../recoil/atoms/user';
import { postsBoards } from '../../apis/posts';
import { locationStringSelector, postsState } from '@_recoil/atoms/posts';

import infoCircle from '@_assets/images/svg/alert-circle.svg';

const CreatePostContent = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userState);
  const [postState, setPostState] = useRecoilState(postsState);
  const mutation = useMutation({
    mutationFn: () => postsBoards(user.accessToken, { ...postState }),
    onSuccess: (data) => {
      console.log('게시글 등록 성공:', data);
    },
    onError: (error) => {
      console.error('게시글 등록 실패:', error);
    },
  });
  const handleChange = (name: string, value: string) => {
    setPostState((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
        <S.TitleText>제목</S.TitleText>
        <S.TitleInput
          type='text'
          placeholder='글 제목을 입력해주세요..'
          onChange={(e) => handleChange('content', e.target.value)}
          value={postState.content}
          required
        ></S.TitleInput>
      </S.Title>
      <S.Content>
        <S.ContentText>내용</S.ContentText>
        <S.ContentInput
          placeholder='글 내용을 입력해주세요..'
          onChange={(e) => handleChange('title', e.target.value)}
          value={postState.title}
          required
        ></S.ContentInput>
      </S.Content>
      <S.Link>
        <S.LinkText>링크</S.LinkText>
        <S.LinkInput
          placeholder='링크(오픈채팅방)을 입력해주세요..'
          type='text'
          onChange={(e) => handleChange('linkUrl', e.target.value)}
          value={postState.linkUrl}
        ></S.LinkInput>
      </S.Link>
      <S.BtnWrap>
        <S.PrevBtn
          onClick={() => {
            navigate(-1);
          }}
        >
          이전
        </S.PrevBtn>
        <S.registrationBtn onClick={() => mutation.mutate()}>등록</S.registrationBtn>
      </S.BtnWrap>
    </S.CreateContentContainer>
  );
};

export default CreatePostContent;
