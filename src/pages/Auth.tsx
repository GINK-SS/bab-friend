import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authApi from '../apis/auth';
import { useSetRecoilState } from 'recoil';
import { userState } from '../recoil/atoms/user';
import Spinner from '../components/common/Spinner';

const Auth = () => {
  const code = new URL(document.URL).searchParams.get('code') as string;
  const setUserInfo = useSetRecoilState(userState);
  const navigate = useNavigate();

  useEffect(() => {
    const getTokensAndUserInfo = async () => {
      const {
        data: { accessToken },
      } = await authApi.requestTokens(code);
      const { data } = await authApi.requestUserInfo(accessToken);

      setUserInfo({ ...data, accessToken });
    };

    try {
      getTokensAndUserInfo();
    } catch (err) {
      console.log(err);
      window.alert('다시 로그인해주세요.');
    } finally {
      navigate('/');
    }
  }, [code, navigate, setUserInfo]);

  return <Spinner />;
};

export default Auth;
