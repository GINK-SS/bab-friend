import { ReactNode, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import authApi from '@_apis/auth';
import { authState } from '@_recoil/atoms/auth';
import { AuthStatus } from '@_types/auth';
import { useQuery, useQueryClient } from '@tanstack/react-query';

const AuthChecker = ({ children }: { children: ReactNode }) => {
  const [authInfo, setAuthInfo] = useRecoilState(authState);
  const queryClient = useQueryClient();
  const { refetch: refetchUserInfo, data: userInfo } = useQuery({
    queryKey: ['userInfo'],
    queryFn: authApi.requestUserInfo,
    enabled: false,
  });

  useEffect(() => {
    if (authInfo.authStatus === AuthStatus.authorized) {
      refetchUserInfo();
    }

    if (authInfo.authStatus === AuthStatus.unauthorized) {
      queryClient.removeQueries({ queryKey: ['userInfo'], exact: true });
      queryClient.removeQueries({ queryKey: ['users'], exact: true });
    }
  }, [authInfo, queryClient, refetchUserInfo]);

  useEffect(() => {
    (async () => {
      try {
        const accessToken = await authApi.refresh();

        if (!accessToken) return;

        setAuthInfo({ authStatus: AuthStatus.authorized });
        authApi.silentRefresh();
      } catch (e) {
        setAuthInfo({ authStatus: AuthStatus.unauthorized });
      }
    })();
  }, [setAuthInfo]);

  if (authInfo.authStatus === AuthStatus.pending) return null;

  if (authInfo.authStatus === AuthStatus.authorized && !userInfo) return null;

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
