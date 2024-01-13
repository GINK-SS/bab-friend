import * as S from './styles';

const CommentInput = () => {
  return (
    <S.CommentContainer>
      <S.CommentTextWrap>
        <S.CommentText>댓글</S.CommentText>
        <S.CommentNickname>주트롱</S.CommentNickname>
      </S.CommentTextWrap>
      <S.InputWrap>
        <S.CommentInput />
        <S.SubmitButton>댓글 등록</S.SubmitButton>
      </S.InputWrap>
    </S.CommentContainer>
  );
};

export default CommentInput;
