import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '@/const';
import { appProcess } from './app-process/app-process';
import { offersData } from './offers-data/offers-data';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.App]: appProcess.reducer,
  [NameSpace.Data]: offersData.reducer,
  [NameSpace.User]: userProcess.reducer,
});
