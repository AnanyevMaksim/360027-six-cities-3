import { createReducer } from '@reduxjs/toolkit';
import {
  AuthorizationStatus,
  DEFAULT_CITY,
  RequestStatus,
  SortType,
} from '@/const';
import { AuthInfo } from '@/types/auth';
import { CityName, Offers } from '@/types/offer';
import { changeCity, changeSort } from './action';
import {
  checkAuthAction,
  fetchOffersAction,
  loginAction,
  logoutAction,
} from './api-actions';

type InitialState = {
  city: CityName;
  offers: Offers;
  sortType: SortType;
  offersStatus: RequestStatus;
  authorizationStatus: AuthorizationStatus;
  user: AuthInfo | null;
};

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  sortType: SortType.Popular,
  offersStatus: RequestStatus.Idle,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
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
    })
    .addCase(checkAuthAction.fulfilled, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.user = action.payload;
    })
    .addCase(checkAuthAction.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(loginAction.fulfilled, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.user = action.payload;
    })
    .addCase(logoutAction.fulfilled, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.user = null;
    });
});
