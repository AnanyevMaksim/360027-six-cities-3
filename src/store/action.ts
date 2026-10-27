import { createAction } from '@reduxjs/toolkit';
import { SortType } from '@/const';
import { CityName } from '@/types/offer';

export const changeCity = createAction<CityName>('city/change');

export const changeSort = createAction<SortType>('sort/change');
