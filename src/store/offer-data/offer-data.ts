import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '@/const';
import { FullOffer, Offers } from '@/types/offer';
import { fetchNearbyOffersAction, fetchOfferAction } from '@/store/api-actions';

type OfferData = {
  offer: FullOffer | null;
  offerStatus: RequestStatus;
  nearbyOffers: Offers;
};

const initialState: OfferData = {
  offer: null,
  offerStatus: RequestStatus.Idle,
  nearbyOffers: [],
};

export const offerData = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.offer = null;
        state.offerStatus = RequestStatus.Loading;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.offerStatus = RequestStatus.Success;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.offerStatus = RequestStatus.Error;
      })
      .addCase(fetchNearbyOffersAction.pending, (state) => {
        state.nearbyOffers = [];
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      });
  },
});
