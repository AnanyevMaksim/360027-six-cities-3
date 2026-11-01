import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import useAppSelector from '@/hooks/use-app-selector';
import { selectOffersStatus } from '@/store/selectors';
import { router } from '@/router/router';
import Loader from '@/components/loader/loader';
import FullPageError from '@/components/full-page-error/full-page-error';

function App(): JSX.Element {
  const { isLoading, isError } = useAppSelector(selectOffersStatus);

  if (isLoading) {
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
