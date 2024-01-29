import { useEffect, useState } from 'react';
import ProfileInfo from '@_components/ProfileInfo';
import MannerTemp from '@_components/BabTemp';
import Review from '@_components/Review';
import reviewApi from '@_apis/review';
import { ReviewInfo } from '@_types/review';
import * as S from './styles';
import arrow from '@_assets/images/svg/arrow.svg';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [reviews, setReviews] = useState<ReviewInfo[]>([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  const getReviewData = async () => {
    const {
      data: { reviews, totalElement },
    } = await reviewApi.getReviews({ page: 0 });

    setReviews(reviews);
    setTotal(totalElement);
  };

  const onReviews = () => {
    navigate('/profile/reviews');
  };

  useEffect(() => {
    getReviewData();
  }, []);

  return (
    <>
      <ProfileInfo />
      <MannerTemp />
      <S.ReviewHeaderWrap onClick={onReviews}>
        <S.ReviewHeader>
          받은 밥 후기
          <S.ReviewNum>{`(${total})`}</S.ReviewNum>
        </S.ReviewHeader>
        <S.ArrowBtn src={arrow} />
      </S.ReviewHeaderWrap>

      {reviews.length ? reviews.map((reviewInfo, idx) => <Review key={idx} reviewInfo={reviewInfo} />) : null}
    </>
  );
};

export default Profile;
