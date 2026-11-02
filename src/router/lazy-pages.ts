import { lazy } from 'react';

export const LoginPage = lazy(() => import('@/pages/login-page/login-page'));
export const FavoritesPage = lazy(
  () => import('@/pages/favorites-page/favorites-page'),
);
export const OfferPage = lazy(() => import('@/pages/offer-page/offer-page'));
export const NotFoundPage = lazy(
  () => import('@/pages/not-found-page/not-found-page'),
);
