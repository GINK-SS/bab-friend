import { ReactNode, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import authApi from '@_apis/auth';
import { userState } from '@_recoil/atoms/user';

const AuthChecker = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useRecoilState(userState);

  useEffect(() => {
    (async () => {
      try {
        await authApi.refresh();

        const { data } = await authApi.requestUserInfo();
        setUserInfo((prev) => ({ ...prev, ...data }));

        authApi.silentRefresh();
      } catch (e) {
        setUserInfo((prev) => ({ ...prev, authStatus: 'unauthorized' }));
      }
    })();
  }, [setUserInfo]);

  if (userInfo.authStatus === 'pending') return null;

  return <>{children}</>;
};

export default AuthChecker;
