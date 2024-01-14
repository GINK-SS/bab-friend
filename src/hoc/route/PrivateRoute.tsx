import { authState } from '@_recoil/atoms/auth';
import { modalState } from '@_recoil/atoms/modal';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

type PrivateRouteProps = {
  component: JSX.Element;
};

const PrivateRoute = ({ component }: PrivateRouteProps) => {
  const { authStatus } = useRecoilValue(authState);
  const setModal = useSetRecoilState(modalState);

  useEffect(() => {
    if (authStatus === 'unauthorized') {
      setModal({ isActive: true });
    }
  }, [authStatus, setModal]);

  if (authStatus === 'pending') return null;
  if (authStatus === 'authorized') {
    return component;
  }

  return <Navigate to='/' replace />;
};

export default PrivateRoute;
