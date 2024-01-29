import { ReviewInfo } from '@_types/review';
import * as S from './styles';

type ReviewProps = {
  reviewInfo: ReviewInfo;
};

const Review = ({ reviewInfo }: ReviewProps) => {
  return (
    <S.Container>
      <S.ProfileImg src={reviewInfo.writerImageUrl} />

      <S.ContentWrapper>
        <S.Nickname>{reviewInfo.writer}</S.Nickname>
        <S.Date>{reviewInfo.createdAt}</S.Date>

        <S.Content>{reviewInfo.content}</S.Content>
      </S.ContentWrapper>
    </S.Container>
  );
};

export default Review;
