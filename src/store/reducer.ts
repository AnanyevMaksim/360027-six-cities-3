import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY } from '@/const';
import { CityName, Offers } from '@/types/offer';
import { offers } from '@/mocks/offers';
import { SortType } from '@/components/sorting/const';
import { changeCity, changeSort } from './action';

type InitialState = {
  city: CityName;
  offers: Offers;
  sortType: SortType;
};

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers,
  sortType: SortType.Popular,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sortType = action.payload;
    });
});
