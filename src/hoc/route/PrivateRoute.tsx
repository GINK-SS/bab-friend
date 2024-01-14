import { authState } from '@_recoil/atoms/auth';
import { modalState } from '@_recoil/atoms/modal';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { AuthStatus } from '@_types/auth';

type PrivateRouteProps = {
  component: JSX.Element;
};

const PrivateRoute = ({ component }: PrivateRouteProps) => {
  const { authStatus } = useRecoilValue(authState);
  const setModal = useSetRecoilState(modalState);

  useEffect(() => {
    if (authStatus === AuthStatus.unauthorized) {
      setModal({ isActive: true });
    }
  }, [authStatus, setModal]);

  if (authStatus === AuthStatus.pending) return null;
  if (authStatus === AuthStatus.authorized) {
    return component;
  }

  return <Navigate to='/' replace />;
};

export default PrivateRoute;
