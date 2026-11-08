import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '@/const';
import { Offers } from '@/types/offer';
import {
  changeFavoriteStatusAction,
  fetchFavoritesAction,
  fetchOffersAction,
  logoutAction,
} from '@/store/api-actions';

type OffersData = {
  offers: Offers;
  offersStatus: RequestStatus;
};

const initialState: OffersData = {
  offers: [],
  offersStatus: RequestStatus.Idle,
};

export const offersData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.offersStatus = RequestStatus.Loading;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.offersStatus = RequestStatus.Success;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.offersStatus = RequestStatus.Error;
      })
      .addCase(changeFavoriteStatusAction.fulfilled, (state, action) => {
        const offer = state.offers.find(
          (item) => item.id === action.payload.id,
        );

        if (offer) {
          offer.isFavorite = action.payload.isFavorite;
        }
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        const favoriteIds = action.payload.map((offer) => offer.id);

        state.offers.forEach((offer) => {
          offer.isFavorite = favoriteIds.includes(offer.id);
        });
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.offers.forEach((offer) => {
          offer.isFavorite = false;
        });
      });
  },
});
