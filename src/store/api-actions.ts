import { AxiosInstance, isAxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '@/const';
import { dropToken, saveToken } from '@/services/token';
import { AuthData, AuthInfo } from '@/types/auth';
import { FavoriteData, FullOffer, Offers } from '@/types/offer';
import { Review, ReviewData, Reviews } from '@/types/review';
import { AppDispatch } from '@/types/state';

export const fetchOffersAction = createAsyncThunk<
  Offers,
  undefined,
  { extra: AxiosInstance }
>('data/fetchOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<Offers>(APIRoute.Offers);
  return data;
});

export const fetchFavoritesAction = createAsyncThunk<
  Offers,
  undefined,
  { extra: AxiosInstance }
>('favorites/fetchFavorites', async (_arg, { extra: api }) => {
  const { data } = await api.get<Offers>(APIRoute.Favorite);
  return data;
});

export const checkAuthAction = createAsyncThunk<
  AuthInfo,
  undefined,
  { dispatch: AppDispatch; extra: AxiosInstance }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<AuthInfo>(APIRoute.Login);
  dispatch(fetchFavoritesAction());
  return data;
});

export const loginAction = createAsyncThunk<
  AuthInfo,
  AuthData,
  { dispatch: AppDispatch; extra: AxiosInstance }
>('user/login', async (authData, { dispatch, extra: api }) => {
  const { data } = await api.post<AuthInfo>(APIRoute.Login, authData);
  saveToken(data.token);
  dispatch(fetchFavoritesAction());
  return data;
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  { extra: AxiosInstance }
>('user/logout', async (_arg, { extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
});

export const fetchOfferAction = createAsyncThunk<
  FullOffer,
  string,
  { extra: AxiosInstance; rejectValue: number }
>('offer/fetchOffer', async (offerId, { extra: api, rejectWithValue }) => {
  try {
    const { data } = await api.get<FullOffer>(`${APIRoute.Offers}/${offerId}`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      return rejectWithValue(error.response.status);
    }

    throw error;
  }
});

export const fetchNearbyOffersAction = createAsyncThunk<
  Offers,
  string,
  { extra: AxiosInstance }
>('offer/fetchNearbyOffers', async (offerId, { extra: api }) => {
  const { data } = await api.get<Offers>(
    `${APIRoute.Offers}/${offerId}${APIRoute.Nearby}`,
  );
  return data;
});

export const fetchReviewsAction = createAsyncThunk<
  Reviews,
  string,
  { extra: AxiosInstance }
>('reviews/fetchReviews', async (offerId, { extra: api }) => {
  const { data } = await api.get<Reviews>(`${APIRoute.Comments}/${offerId}`);
  return data;
});

export const postReviewAction = createAsyncThunk<
  Review,
  ReviewData,
  { extra: AxiosInstance }
>(
  'reviews/postReview',
  async ({ offerId, comment, rating }, { extra: api }) => {
    const { data } = await api.post<Review>(`${APIRoute.Comments}/${offerId}`, {
      comment,
      rating,
    });
    return data;
  },
);

export const changeFavoriteStatusAction = createAsyncThunk<
  FullOffer,
  FavoriteData,
  { extra: AxiosInstance }
>(
  'favorites/changeFavoriteStatus',
  async ({ offerId, isFavorite }, { extra: api }) => {
    const { data } = await api.post<FullOffer>(
      `${APIRoute.Favorite}/${offerId}/${Number(isFavorite)}`,
    );
    return data;
  },
);
