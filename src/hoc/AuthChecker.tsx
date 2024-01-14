import { ReactNode, useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import authApi from '@_apis/auth';
import { userState } from '@_recoil/atoms/user';
import { authState } from '@_recoil/atoms/auth';
import { AuthStatus } from '@_types/auth';

const AuthChecker = ({ children }: { children: ReactNode }) => {
  const [authInfo, setAuthInfo] = useRecoilState(authState);
  const setUserInfo = useSetRecoilState(userState);

  useEffect(() => {
    (async () => {
      try {
        await authApi.refresh();

        const { data } = await authApi.requestUserInfo();
        setUserInfo({ ...data });

        authApi.silentRefresh();
      } catch (e) {
        setAuthInfo({ authStatus: AuthStatus.unauthorized });
      }
    })();
  }, [setAuthInfo, setUserInfo]);

  if (authInfo.authStatus === AuthStatus.pending) return null;

  return <>{children}</>;
};

export default AuthChecker;
