import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import authApi from '@_apis/auth';
import Spinner from '@_components/common/Spinner';
import { setAccessToken } from '@_apis/axios';
import { authState } from '@_recoil/atoms/auth';
import { ModalName, modalState } from '@_recoil/atoms/modal';
import { AuthStatus } from '@_types/auth';

const SignIn = () => {
  const code = new URL(document.URL).searchParams.get('code') as string;
  const [authInfo, setAuthInfo] = useRecoilState(authState);
  const setModal = useSetRecoilState(modalState);
  const navigate = useNavigate();

  const getTokens = async () => {
    // 로그인 되어 있는데 접근 시 거부
    if (authInfo.authStatus === AuthStatus.authorized) {
      window.alert('올바르지 못한 접근입니다.');
      navigate('/', { replace: true });

      return;
    }

    try {
      const {
        data: { accessToken },
      } = await authApi.kakaoLogin(code, new URL(document.URL).origin);

      if (!accessToken) {
        window.alert('로그인 실패하였습니다. 다시 로그인 해주세요.');
        setModal({ name: ModalName.login, isActive: true });
        navigate('/', { replace: true });

        return;
      }

      setAccessToken(accessToken);
      setAuthInfo({ authStatus: AuthStatus.authorized });
      authApi.silentRefresh();
    } catch {
      window.alert('로그인 실패하였습니다. 다시 로그인 해주세요.');
      setModal({ name: ModalName.login, isActive: true });
      navigate('/', { replace: true });
    }
  };

  useEffect(() => {
    getTokens();
  }, []);

  return <Spinner />;
};

export default SignIn;
