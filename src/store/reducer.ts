import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY, SortType } from '@/const';
import { CityName, Offers } from '@/types/offer';
import { changeCity, changeSort } from './action';
import { fetchOffersAction } from './api-actions';

type InitialState = {
  city: CityName;
  offers: Offers;
  sortType: SortType;
};

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  sortType: SortType.Popular,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(fetchOffersAction.fulfilled, (state, action) => {
      state.offers = action.payload;
    });
});
