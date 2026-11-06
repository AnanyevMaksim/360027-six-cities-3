import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace, RequestStatus } from '@/const';
import { AuthInfo } from '@/types/auth';
import {
  checkAuthAction,
  loginAction,
  logoutAction,
} from '@/store/api-actions';

type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: AuthInfo | null;
  loginStatus: RequestStatus;
};

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  loginStatus: RequestStatus.Idle,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.pending, (state) => {
        state.loginStatus = RequestStatus.Loading;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
        state.loginStatus = RequestStatus.Success;
      })
      .addCase(loginAction.rejected, (state) => {
        state.loginStatus = RequestStatus.Error;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
      });
  },
});
