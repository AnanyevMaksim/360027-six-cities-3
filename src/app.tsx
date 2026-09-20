import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '@/const';
import { offers } from '@/mocks/offers';
import MainPage from '@/pages/main-page/main-page';
import LoginPage from '@/pages/login-page/login-page';
import FavoritesPage from '@/pages/favorites-page/favorites-page';
import OfferPage from '@/pages/offer-page/offer-page';
import NotFoundPage from '@/pages/not-found-page/not-found-page';
import PrivateRoute from '@/components/private-route/private-route';

const router = createBrowserRouter([
  {
    path: AppRoute.Root,
    element: <MainPage offers={offers} />,
  },
  {
    path: AppRoute.Login,
    element: <LoginPage />,
  },
  {
    path: AppRoute.Favorites,
    element: (
      <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
        <FavoritesPage offers={offers} />
      </PrivateRoute>
    ),
  },
  {
    path: AppRoute.Offer,
    element: <OfferPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

function App(): JSX.Element {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
