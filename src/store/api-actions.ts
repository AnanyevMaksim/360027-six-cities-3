import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '@/const';
import { saveToken } from '@/services/token';
import { AuthData, AuthInfo } from '@/types/auth';
import { Offers } from '@/types/offer';

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
