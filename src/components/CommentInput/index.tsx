import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import commentApi from '@_apis/comment';
import Textarea from '@_components/common/Textarea';
import * as S from './styles';

const CommentInput = () => {
  const queryClient = useQueryClient();
  let params = useParams();
  const [comment, setComment] = useState({ content: '' });

  const handleChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment({ content: e.target.value });
  };

  const postComment = useMutation({
    mutationFn: () => commentApi.postComment(Number(params.id), comment),
    onSuccess(data) {
      queryClient.invalidateQueries({ queryKey: ['boardDetail'] });
      setComment({ content: '' });
    },
    onError(err) {
      console.log(err);
    },
  });

  const submitComment = () => {
    postComment.mutate();
  };

  return (
    <S.CommentContainer>
      <S.CommentTextWrap>
        <S.CommentText>댓글</S.CommentText>
        <S.CommentNickname>주트롱</S.CommentNickname>
      </S.CommentTextWrap>
      <S.InputWrap>
        <Textarea placeholder='댓글을 입력해주세요.' value={comment.content} onChange={handleChangeComment} />
        <S.SubmitButton onClick={submitComment}>댓글 등록</S.SubmitButton>
      </S.InputWrap>
    </S.CommentContainer>
  );
};

export default CommentInput;
