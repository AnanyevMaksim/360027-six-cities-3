import { SortType } from '@/const';

export const SortTypeDictionary: Record<SortType, string> = {
  [SortType.Popular]: 'Popular',
  [SortType.PriceAsc]: 'Price: low to high',
  [SortType.PriceDesc]: 'Price: high to low',
  [SortType.TopRated]: 'Top rated first',
};
