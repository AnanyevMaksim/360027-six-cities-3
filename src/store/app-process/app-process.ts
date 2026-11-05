import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_CITY, NameSpace, SortType } from '@/const';
import { CityName } from '@/types/offer';

type AppProcess = {
  city: CityName;
  sortType: SortType;
};

const initialState: AppProcess = {
  city: DEFAULT_CITY,
  sortType: SortType.Popular,
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<CityName>) => {
      state.city = action.payload;
    },
    changeSort: (state, action: PayloadAction<SortType>) => {
      state.sortType = action.payload;
    },
  },
});

export const { changeCity, changeSort } = appProcess.actions;
