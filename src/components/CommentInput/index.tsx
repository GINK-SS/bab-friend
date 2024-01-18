import { useState } from 'react';

import Textarea from '@_components/common/Textarea';
import * as S from './styles';
import postApi from '@_apis/comment';
import { useMutation } from '@tanstack/react-query';

const CommentInput = () => {
  const [comment, setComment] = useState({ comments: '' });

  const createPost = useMutation({
    mutationFn: () => postApi.postsComment({ ...comment }),
    onSuccess: (data) => {
      console.log('게시글 등록 성공:', data);
    },
    onError: (error) => {
      // alert('게시글 작성 실패');
      console.error('게시글 등록 실패:', error);
    },
  });

  const submitComment = () => {
    createPost.mutate();
  };

  const handleChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment((prevData) => ({ comments: e.target.value }));
  };

  return (
    <S.CommentContainer>
      <S.CommentTextWrap>
        <S.CommentText>댓글</S.CommentText>
        <S.CommentNickname>주트롱</S.CommentNickname>
      </S.CommentTextWrap>
      <S.InputWrap>
        <Textarea placeholder='댓글을 입력해주세요.' value={comment.comments} onChange={handleChangeComment} />
        <S.SubmitButton onClick={submitComment}>댓글 등록</S.SubmitButton>
      </S.InputWrap>
    </S.CommentContainer>
  );
};

export default CommentInput;
