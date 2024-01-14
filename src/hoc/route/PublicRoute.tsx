import { authState } from '@_recoil/atoms/auth';
import { Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

type PublicRouteProps = {
  component: JSX.Element;
  canAccessWithAuth?: boolean;
};

const PublicRoute = ({ component, canAccessWithAuth = true }: PublicRouteProps) => {
  const { authStatus } = useRecoilValue(authState);

  if (authStatus === 'pending') return null;
  if (canAccessWithAuth || authStatus === 'unauthorized') {
    return component;
  }

  return <Navigate to='/' replace />;
};

export default PublicRoute;
