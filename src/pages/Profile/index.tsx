import { useRecoilValue } from 'recoil';
import { userState } from '../../recoil/atoms/user';

import * as S from './styles';

import ProfileInfo from '../../components/ProfileInfo';
import MannerTemp from '../../components/BabTemp';
import BabReview from '../../components/BabReview';

import arrow from '../../assets/images/svg/arrow.svg';

const Profile = () => {
  const userInfo = useRecoilValue(userState);
  console.log(userInfo);
  return (
    <>
      <ProfileInfo />
      <MannerTemp />
      <S.ReviewHeaderWrap>
        <S.ReviewHeader>
          받은 밥 후기<S.ReviewNum>(4)</S.ReviewNum>
        </S.ReviewHeader>
        <S.ArrowBtn src={arrow} />
      </S.ReviewHeaderWrap>
      <BabReview />
      <BabReview />
      <BabReview />
      <BabReview />
    </>
  );
};

export default Profile;
