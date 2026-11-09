import { createSelector } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '@/const';
import { State } from '@/types/state';
import { Offers } from '@/types/offer';

export const selectFavorites = (state: State) =>
  state[NameSpace.Favorites].favorites;

export const selectFavoriteIds = (state: State) =>
  state[NameSpace.Favorites].favoriteIds;

export const selectFavoriteIdsSet = createSelector(
  [selectFavoriteIds],
  (favoriteIds) => new Set(favoriteIds),
);

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
    favorites.reduce<Record<string, Offers>>((offersByCity, offer) => {
      if (!offersByCity[offer.city.name]) {
        offersByCity[offer.city.name] = [];
      }

      offersByCity[offer.city.name].push(offer);

      return offersByCity;
    }, {}),
);
