import { createSelector } from '@reduxjs/toolkit';
import { CITIES, NameSpace, RequestStatus } from '@/const';
import { State } from '@/types/state';

export const selectFavorites = (state: State) =>
  state[NameSpace.Favorites].favorites;

export const selectFavoritesRequestStatus = (state: State) =>
  state[NameSpace.Favorites].favoritesStatus;

export const selectFavoritesStatus = createSelector(
  [selectFavoritesRequestStatus],
  (status) => ({
    isLoading:
      status === RequestStatus.Idle || status === RequestStatus.Loading,
    isError: status === RequestStatus.Error,
  }),
);

export const selectFavoritesByCity = createSelector(
  [selectFavorites],
  (favorites) =>
    CITIES.map((city) => ({
      city,
      offers: favorites.filter((offer) => offer.city.name === city),
    })).filter(({ offers }) => offers.length > 0),
);
