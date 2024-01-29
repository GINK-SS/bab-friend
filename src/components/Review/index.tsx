import { ReviewInfo } from '@_types/review';
import * as S from './styles';
import more from '@_assets/images/svg/more-vertical.svg';

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

      <img src={more} alt='' />
    </S.Container>
  );
};

export default Review;
