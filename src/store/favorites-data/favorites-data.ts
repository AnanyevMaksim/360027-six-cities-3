import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '@/const';
import { Offers } from '@/types/offer';
import {
  changeFavoriteStatusAction,
  fetchFavoritesAction,
} from '@/store/api-actions';

type FavoritesData = {
  favorites: Offers;
  favoritesStatus: RequestStatus;
};

const initialState: FavoritesData = {
  favorites: [],
  favoritesStatus: RequestStatus.Idle,
};

export const favoritesData = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.favoritesStatus = RequestStatus.Loading;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.favoritesStatus = RequestStatus.Success;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.favoritesStatus = RequestStatus.Error;
      })
      .addCase(changeFavoriteStatusAction.fulfilled, (state, action) => {
        if (!action.payload.isFavorite) {
          state.favorites = state.favorites.filter(
            (offer) => offer.id !== action.payload.id,
          );
        }
      });
  },
});
