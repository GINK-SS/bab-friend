import * as S from './styles';
import { Comment } from '@_types/comment';

type CommetDisplayProps = {
  commentData: Comment;
};

const CommentDisplay = ({ commentData }: CommetDisplayProps) => {
  return (
    <S.CommentDisplayContainer>
      <S.ProfileWrap>
        <S.ProfileImg src={commentData.author.profileImageUrl} />
        <S.Nickname>{commentData.author.nickName}</S.Nickname>
      </S.ProfileWrap>
      <S.Time>{commentData.createdAt}</S.Time>
      <S.CommentContent>{commentData.content}</S.CommentContent>
    </S.CommentDisplayContainer>
  );
};

export default CommentDisplay;
