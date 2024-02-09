import { ReviewInfo } from '@_types/review';
import formatDateToTimeAgo from '@_utils/formatDateToTimeAgo';
import * as S from './styles';

type ReviewProps = {
  reviewInfo: ReviewInfo;
  isTarget?: boolean;
  isFull?: boolean;
};

const Review = ({ reviewInfo, isFull = false }: ReviewProps) => {
  return (
    <S.Container>
      <S.ProfileImg src={reviewInfo.writerImageUrl} />

      <S.ContentWrapper>
        <S.Nickname>{reviewInfo.writer}</S.Nickname>
        <S.Date>{formatDateToTimeAgo(reviewInfo.createdAt)}</S.Date>

        <S.Content $isFull={isFull}>{reviewInfo.content}</S.Content>
      </S.ContentWrapper>
    </S.Container>
  );
};

export default Review;
