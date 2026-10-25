import { createSelector } from '@reduxjs/toolkit';
import { State } from '@/types/state';
import { sortOffers } from '@/components/sorting/utils';

export const selectCity = (state: State) => state.city;

export const selectOffers = (state: State) => state.offers;

export const selectSortType = (state: State) => state.sortType;

export const selectCityOffers = createSelector(
  [selectOffers, selectCity],
  (offers, city) => offers.filter((offer) => offer.city.name === city),
);

export const selectSortedCityOffers = createSelector(
  [selectCityOffers, selectSortType],
  (offers, sortType) => sortOffers(offers, sortType),
);
