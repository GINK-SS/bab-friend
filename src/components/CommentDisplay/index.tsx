import * as S from './styles';

const CommentDisplay = () => {
  return (
    <S.CommentDisplayContainer>
      <S.ProfileWrap>
        <S.ProfileImg
          src={
            'https:images.unsplash.com/photo-1704098712141-5fc42b69a39f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8'
          }
        />
        <S.Nickname>주트롱</S.Nickname>
      </S.ProfileWrap>
      <S.Time>2023-12-04 21:23:13</S.Time>
      <S.CommentContent>저 연락드렸습니다. 확인부탁드려요!</S.CommentContent>
    </S.CommentDisplayContainer>
  );
};

export default CommentDisplay;
