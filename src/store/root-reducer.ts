import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '@/const';
import { appProcess } from './app-process/app-process';
import { favoritesData } from './favorites-data/favorites-data';
import { offerData } from './offer-data/offer-data';
import { offersData } from './offers-data/offers-data';
import { reviewsData } from './reviews-data/reviews-data';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.App]: appProcess.reducer,
  [NameSpace.Data]: offersData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Offer]: offerData.reducer,
  [NameSpace.Reviews]: reviewsData.reducer,
  [NameSpace.Favorites]: favoritesData.reducer,
});
