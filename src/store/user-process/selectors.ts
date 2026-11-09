import { createSelector } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '@/const';
import { State } from '@/types/state';

export const selectAuthorizationStatus = (state: State) =>
  state[NameSpace.User].authorizationStatus;

export const selectUser = (state: State) => state[NameSpace.User].user;

export const selectLoginRequestStatus = (state: State) =>
  state[NameSpace.User].loginStatus;

export const selectLoginStatus = createSelector(
  [selectLoginRequestStatus],
  (status) => ({
    isLoading: status === RequestStatus.Loading,
  }),
);
