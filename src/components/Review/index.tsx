import { ReviewInfo } from '@_types/review';
import * as S from './styles';
import { ForwardedRef, forwardRef } from 'react';
import formatDateToTimeAgo from '@_utils/formatDateToTimeAgo';

type ReviewProps = {
  reviewInfo: ReviewInfo;
  isTarget?: boolean;
  isFull?: boolean;
};

const Review = forwardRef(
  ({ reviewInfo, isTarget = false, isFull = false }: ReviewProps, ref?: ForwardedRef<HTMLDivElement>) => {
    return (
      <S.Container ref={isTarget ? ref : null}>
        <S.ProfileImg src={reviewInfo.writerImageUrl} />

        <S.ContentWrapper>
          <S.Nickname>{reviewInfo.writer}</S.Nickname>
          <S.Date>{formatDateToTimeAgo(reviewInfo.createdAt)}</S.Date>

          <S.Content $isFull={isFull}>{reviewInfo.content}</S.Content>
        </S.ContentWrapper>
      </S.Container>
    );
  }
);

export default Review;
