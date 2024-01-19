import { useState } from 'react';

import Textarea from '@_components/common/Textarea';
import * as S from './styles';

const CommentInput = () => {
  const [comment, setComment] = useState({ comments: '' });

  const handleChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment({ comments: e.target.value });
  };

  return (
    <S.CommentContainer>
      <S.CommentTextWrap>
        <S.CommentText>댓글</S.CommentText>
        <S.CommentNickname>주트롱</S.CommentNickname>
      </S.CommentTextWrap>
      <S.InputWrap>
        <Textarea placeholder='댓글을 입력해주세요.' value={comment.comments} onChange={handleChangeComment} />
        <S.SubmitButton>댓글 등록</S.SubmitButton>
      </S.InputWrap>
    </S.CommentContainer>
  );
};

export default CommentInput;
