import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY } from '@/const';
import { CityName, Offers } from '@/types/offer';

type InitialState = {
  city: CityName;
  offers: Offers;
};

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
};

export const reducer = createReducer(initialState, () => {});
