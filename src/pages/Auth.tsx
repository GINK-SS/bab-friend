import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import authApi from '@_apis/auth';
import { userState } from '@_recoil/atoms/user';
import Spinner from '@_components/common/Spinner';
import { setAccessToken } from '@_apis/axios';

const Auth = () => {
  const code = new URL(document.URL).searchParams.get('code') as string;
  const setUserInfo = useSetRecoilState(userState);
  const navigate = useNavigate();

  useEffect(() => {
    const getTokensAndUserInfo = async () => {
      const {
        data: { accessToken },
      } = await authApi.requestTokens(code);

      if (!accessToken) {
        // ToDo: 로그인 실패 시 구현
        console.log('로그인 실패');
        return;
      }

      setAccessToken(accessToken);

      const { data } = await authApi.requestUserInfo();

      if (!data) {
        // ToDo: 사용자 정보 불러오기 실패 시 구현
        console.log('사용자 정보 불러오기 실패');
        return;
      }

      setUserInfo((prev) => {
        return { ...prev, authStatus: 'authorized', ...data };
      });
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
