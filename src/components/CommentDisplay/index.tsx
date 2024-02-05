import formatDateToTimeAgo from '@_utils/formatDateToTimeAgo';
import * as S from './styles';
import { Comment } from '@_types/comment';
import formatDate from '@_utils/formatDate';

type CommetDisplayProps = {
  commentData: Comment;
};
const CommentDisplay = ({ commentData }: CommetDisplayProps) => {
  return (
    <S.CommentDisplayContainer>
      <S.ProfileWrap>
        <S.ProfileImg src={commentData.profileImageUrl} />
        <S.Nickname>{commentData.writer}</S.Nickname>
      </S.ProfileWrap>
      <S.TimeWrap>
        <S.Time>{formatDate(commentData.createdAt)}</S.Time>
        <S.Time>·</S.Time>
        <S.Time>{formatDateToTimeAgo(commentData.createdAt)}</S.Time>
      </S.TimeWrap>
      <S.CommentContent>{commentData.content}</S.CommentContent>
    </S.CommentDisplayContainer>
  );
};

export default CommentDisplay;
