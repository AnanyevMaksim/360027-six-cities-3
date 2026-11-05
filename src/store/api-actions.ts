import { AxiosInstance, isAxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '@/const';
import { dropToken, saveToken } from '@/services/token';
import { AuthData, AuthInfo } from '@/types/auth';
import { FullOffer, Offers } from '@/types/offer';
import { Reviews } from '@/types/review';

export const fetchOffersAction = createAsyncThunk<
  Offers,
  undefined,
  { extra: AxiosInstance }
>('data/fetchOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<Offers>(APIRoute.Offers);
  return data;
});

export const checkAuthAction = createAsyncThunk<
  AuthInfo,
  undefined,
  { extra: AxiosInstance }
>('user/checkAuth', async (_arg, { extra: api }) => {
  const { data } = await api.get<AuthInfo>(APIRoute.Login);
  return data;
});

export const loginAction = createAsyncThunk<
  AuthInfo,
  AuthData,
  { extra: AxiosInstance }
>('user/login', async (authData, { extra: api }) => {
  const { data } = await api.post<AuthInfo>(APIRoute.Login, authData);
  saveToken(data.token);
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
