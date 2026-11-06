import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { AuthorizationStatus } from '@/const';
import useAppSelector from '@/hooks/use-app-selector';
import { selectOffersStatus } from '@/store/offers-data/selectors';
import { selectAuthorizationStatus } from '@/store/user-process/selectors';
import { router } from '@/router/router';
import Loader from '@/components/loader/loader';
import FullPageError from '@/components/full-page-error/full-page-error';

function App(): JSX.Element {
  const { isLoading, isError } = useAppSelector(selectOffersStatus);
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  if (isLoading || authorizationStatus === AuthorizationStatus.Unknown) {
    return <Loader />;
  }

  if (isError) {
    return <FullPageError />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
