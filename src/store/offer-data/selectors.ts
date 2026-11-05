import { createSelector } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '@/const';
import { State } from '@/types/state';

const MAX_NEARBY_OFFERS_COUNT = 3;

export const selectOffer = (state: State) => state[NameSpace.Offer].offer;

export const selectOfferRequestStatus = (state: State) =>
  state[NameSpace.Offer].offerStatus;

export const selectNearbyOffers = (state: State) =>
  state[NameSpace.Offer].nearbyOffers;

export const selectOfferStatus = createSelector(
  [selectOfferRequestStatus],
  (status) => ({
    isLoading:
      status === RequestStatus.Idle || status === RequestStatus.Loading,
    isSuccess: status === RequestStatus.Success,
    isError: status === RequestStatus.Error,
  }),
);

export const selectShownNearbyOffers = createSelector(
  [selectNearbyOffers],
  (offers) => offers.slice(0, MAX_NEARBY_OFFERS_COUNT),
);
