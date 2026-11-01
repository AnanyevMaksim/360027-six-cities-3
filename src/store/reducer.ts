import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY, RequestStatus, SortType } from '@/const';
import { CityName, Offers } from '@/types/offer';
import { changeCity, changeSort } from './action';
import { fetchOffersAction } from './api-actions';

type InitialState = {
  city: CityName;
  offers: Offers;
  sortType: SortType;
  offersStatus: RequestStatus;
};

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  sortType: SortType.Popular,
  offersStatus: RequestStatus.Idle,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(fetchOffersAction.pending, (state) => {
      state.offersStatus = RequestStatus.Loading;
    })
    .addCase(fetchOffersAction.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.offersStatus = RequestStatus.Success;
    })
    .addCase(fetchOffersAction.rejected, (state) => {
      state.offersStatus = RequestStatus.Error;
    });
});
