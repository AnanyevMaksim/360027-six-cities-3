import { createAction } from '@reduxjs/toolkit';
import { CityName } from '@/types/offer';
import { SortType } from '@/components/sorting/const';

export const changeCity = createAction<CityName>('city/change');

export const changeSort = createAction<SortType>('sort/change');
