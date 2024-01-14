import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import authApi from '@_apis/auth';
import { userState } from '@_recoil/atoms/user';
import Spinner from '@_components/common/Spinner';
import { setAccessToken } from '@_apis/axios';
import { authState } from '@_recoil/atoms/auth';
import { AuthStatus } from '@_types/auth';

const SignIn = () => {
  const code = new URL(document.URL).searchParams.get('code') as string;
  const setAuthInfo = useSetRecoilState(authState);
  const setUserInfo = useSetRecoilState(userState);
  const navigate = useNavigate();

  useEffect(() => {
    const getTokensAndUserInfo = async () => {
      const {
        data: { accessToken },
      } = await authApi.kakaoLogin(code);

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

      setUserInfo({ ...data });
      setAuthInfo({ authStatus: AuthStatus.authorized });
    };

    try {
      getTokensAndUserInfo();
    } catch (err) {
      console.log(err);
      window.alert('다시 로그인해주세요.');
    } finally {
      navigate('/');
    }
  }, [code, navigate, setAuthInfo, setUserInfo]);

  return <Spinner />;
};

export default SignIn;
