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
        const response = await authApi.refresh();
        if (!response) return;

        const { data } = await authApi.requestUserInfo();

        setUserInfo({ ...data });
        setAuthInfo({ authStatus: AuthStatus.authorized });
        authApi.silentRefresh();
      } catch (e) {
        setAuthInfo({ authStatus: AuthStatus.unauthorized });
      }
    })();
  }, [setAuthInfo, setUserInfo]);

  if (authInfo.authStatus === AuthStatus.pending) return null;

  return (
    <div
      style={{
        maxWidth: '500px',
        minHeight: '100vh',
        margin: '0 auto',
        borderRight: '1px solid rgba(0,0,0,0.5)',
        borderLeft: '1px solid rgba(0,0,0,0.5)',
        backgroundColor: '#FFF',
      }}
    >
      {children}
    </div>
  );
};

export default AuthChecker;
