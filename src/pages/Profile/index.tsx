import * as S from './styles';
import ProfileInfo from '@_components/ProfileInfo';
import MannerTemp from '@_components/BabTemp';
import BabReview from '@_components/BabReview';

import arrow from '@_assets/images/svg/arrow.svg';

const Profile = () => {
  return (
    <>
      <ProfileInfo />
      <MannerTemp />
      <S.ReviewHeaderWrap>
        <S.ReviewHeader>
          받은 밥 후기
          <S.ReviewNum>(4)</S.ReviewNum>
        </S.ReviewHeader>
        <S.ArrowBtn src={arrow} />
      </S.ReviewHeaderWrap>
      <BabReview />
    </>
  );
};

export default Profile;
