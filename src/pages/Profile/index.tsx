import { useQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import { userState } from '../../recoil/atoms/user';
import { fetchUserInfoDetail } from '../../apis/userDetail';

import * as S from './styles';
import ProfileInfo from '../../components/ProfileInfo';
import MannerTemp from '../../components/BabTemp';
import BabReview from '../../components/BabReview';

import arrow from '../../assets/images/svg/arrow.svg';
import { fetchUserInfoDetail } from '../../apis/auth';

const Profile = () => {
  const user = useRecoilValue(userState);

  const { data: userInfo } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetchUserInfoDetail(user.accessToken),
  });

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
