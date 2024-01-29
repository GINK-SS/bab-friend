import { ReviewInfo } from '@_types/review';
import * as S from './styles';
import { ForwardedRef, forwardRef } from 'react';

type ReviewProps = {
  reviewInfo: ReviewInfo;
  isTarget?: boolean;
};

const Review = forwardRef(({ reviewInfo, isTarget = false }: ReviewProps, ref?: ForwardedRef<HTMLDivElement>) => {
  return (
    <S.Container ref={isTarget ? ref : null}>
      <S.ProfileImg src={reviewInfo.writerImageUrl} />

      <S.ContentWrapper>
        <S.Nickname>{reviewInfo.writer}</S.Nickname>
        <S.Date>{reviewInfo.createdAt}</S.Date>

        <S.Content>{reviewInfo.content}</S.Content>
      </S.ContentWrapper>
    </S.Container>
  );
});

export default Review;
