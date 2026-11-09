import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '@/const';
import { Offers } from '@/types/offer';
import {
  changeFavoriteStatusAction,
  fetchFavoritesAction,
  logoutAction,
} from '@/store/api-actions';

type FavoritesData = {
  favorites: Offers;
  favoriteIds: string[];
  favoritesStatus: RequestStatus;
};

const initialState: FavoritesData = {
  favorites: [],
  favoriteIds: [],
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
        state.favoriteIds = action.payload.map(({ id }) => id);
        state.favoritesStatus = RequestStatus.Success;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.favoritesStatus = RequestStatus.Error;
      })
      .addCase(changeFavoriteStatusAction.fulfilled, (state, action) => {
        const { id, isFavorite } = action.payload;

        if (isFavorite) {
          state.favoriteIds.push(id);
        } else {
          state.favoriteIds = state.favoriteIds.filter(
            (favoriteId) => favoriteId !== id,
          );
          state.favorites = state.favorites.filter((offer) => offer.id !== id);
        }
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.favorites = [];
        state.favoriteIds = [];
      });
  },
});
