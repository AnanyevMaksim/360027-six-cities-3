import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '@/const';
import useAppSelector from '@/hooks/use-app-selector';
import { selectAuthorizationStatus } from '@/store/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} replace />
  );
}

export default PrivateRoute;
