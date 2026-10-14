import { createAction } from '@reduxjs/toolkit';
import { CityName, Offers } from '@/types/offer';

export const changeCity = createAction<CityName>('city/change');

export const fillOffers = createAction<Offers>('offers/fill');
