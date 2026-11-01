import { createBrowserRouter } from 'react-router-dom';
import { AppRoute } from '@/const';
import MainPage from '@/pages/main-page/main-page';
import PrivateRoute from '@/components/private-route/private-route';
import {
  FavoritesPage,
  LoginPage,
  NotFoundPage,
  OfferPage,
} from './lazy-pages';

export const router = createBrowserRouter([
  {
    path: AppRoute.Root,
    element: <MainPage />,
  },
  {
    path: AppRoute.Login,
    element: <LoginPage />,
  },
  {
    path: AppRoute.Favorites,
    element: (
      <PrivateRoute>
        <FavoritesPage />
      </PrivateRoute>
    ),
  },
  {
    path: AppRoute.Offer,
    element: <OfferPage />,
  },
  {
    path: AppRoute.NotFound,
    element: <NotFoundPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
