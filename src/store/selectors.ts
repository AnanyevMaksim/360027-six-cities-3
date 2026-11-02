import { createSelector } from '@reduxjs/toolkit';
import { RequestStatus, SortType } from '@/const';
import { Offers } from '@/types/offer';
import { State } from '@/types/state';

function sortOffers(offers: Offers, sortType: SortType): Offers {
  switch (sortType) {
    case SortType.Popular:
      return offers;
    case SortType.PriceAsc:
      return [...offers].sort(
        (firstOffer, secondOffer) => firstOffer.price - secondOffer.price,
      );
    case SortType.PriceDesc:
      return [...offers].sort(
        (firstOffer, secondOffer) => secondOffer.price - firstOffer.price,
      );
    case SortType.TopRated:
      return [...offers].sort(
        (firstOffer, secondOffer) => secondOffer.rating - firstOffer.rating,
      );
  }
}

export const selectCity = (state: State) => state.city;

export const selectOffers = (state: State) => state.offers;

export const selectSortType = (state: State) => state.sortType;

export const selectAuthorizationStatus = (state: State) =>
  state.authorizationStatus;

export const selectUser = (state: State) => state.user;

export const selectLoginRequestStatus = (state: State) => state.loginStatus;

export const selectOffersRequestStatus = (state: State) => state.offersStatus;

export const selectFavoriteOffers = createSelector([selectOffers], (offers) =>
  offers.filter((offer) => offer.isFavorite),
);

export const selectCityOffers = createSelector(
  [selectOffers, selectCity],
  (offers, city) => offers.filter((offer) => offer.city.name === city),
);

export const selectSortedCityOffers = createSelector(
  [selectCityOffers, selectSortType],
  (offers, sortType) => sortOffers(offers, sortType),
);

export const selectOffersStatus = createSelector(
  [selectOffersRequestStatus],
  (status) => ({
    isLoading:
      status === RequestStatus.Idle || status === RequestStatus.Loading,
    isSuccess: status === RequestStatus.Success,
    isError: status === RequestStatus.Error,
  }),
);

export const selectLoginStatus = createSelector(
  [selectLoginRequestStatus],
  (status) => ({
    isLoading: status === RequestStatus.Loading,
    isSuccess: status === RequestStatus.Success,
    isError: status === RequestStatus.Error,
  }),
);
