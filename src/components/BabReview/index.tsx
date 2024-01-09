import * as S from './styles';

import more from '../../assets/images/svg/more-vertical.svg';

const BabReview = () => {
  return (
    <S.BabReviewContainer>
      <S.ProfileWrap>
        <S.ProfileImgWrap>
          <S.ProfileImg
            src={
              'https:images.unsplash.com/photo-1704098712141-5fc42b69a39f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8'
            }
          />
        </S.ProfileImgWrap>
        <S.ProfileInfoWrap>
          <S.Nickname>주트롱</S.Nickname>
          <S.TimeAgo>5분전</S.TimeAgo>
        </S.ProfileInfoWrap>
        <S.MoreBtn src={more} />
      </S.ProfileWrap>
      <S.ReviewContentWrap>
        <S.ReviewContent>
          약속장소까지 시간 정확하게 오셨습니다. 정말 재밌었어요!! 쵝오!!!!!!!
        </S.ReviewContent>
      </S.ReviewContentWrap>
    </S.BabReviewContainer>
  );
};

export default BabReview;
