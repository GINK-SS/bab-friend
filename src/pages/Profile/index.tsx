import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import ProfileInfo from '@_components/ProfileInfo';
import MannerTemp from '@_components/BabTemp';
import Review from '@_components/Review';
import EmptyData from '@_components/EmptyData';
import reviewApi from '@_apis/review';
import arrow from '@_assets/images/svg/arrow.svg';
import * as S from './styles';

const Profile = () => {
  const navigate = useNavigate();
  const { data: reviewsData } = useQuery({
    queryKey: ['reviewsTop5'],
    queryFn: () => reviewApi.getReviews({ page: 0 }),
    select: (data) => data.data,
  });

  const onReviews = () => {
    navigate('/profile/reviews');
  };

  return (
    <>
      <ProfileInfo />
      <MannerTemp />
      <S.ReviewHeaderWrap onClick={onReviews}>
        <S.ReviewHeader>
          받은 밥 후기
          <S.ReviewNum>{`(${reviewsData?.totalElement ?? 0})`}</S.ReviewNum>
        </S.ReviewHeader>
        <S.ArrowBtn src={arrow} />
      </S.ReviewHeaderWrap>

      {reviewsData?.reviews.length ? (
        reviewsData.reviews.map((reviewInfo, idx) => <Review key={idx} reviewInfo={reviewInfo} />)
      ) : (
        <div style={{ position: 'relative', marginTop: '50px' }}>
          <EmptyData content='존재하는 밥 후기가 없습니다 :(' />
        </div>
      )}
    </>
  );
};

export default Profile;
