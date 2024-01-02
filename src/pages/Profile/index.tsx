import { useRecoilValue } from 'recoil';
import { userState } from '../../recoil/atoms/user';
import * as S from './styles';
import ProfileInfo from '../../components/ProfileInfo';

const Profile = () => {
  const userInfo = useRecoilValue(userState);
  console.log(userInfo);
  return (
    <>
      <ProfileInfo></ProfileInfo>
    </>
  );
};

export default Profile;
