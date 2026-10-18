import { Offers } from '@/types/offer';
import { SortType } from './const';

export function sortOffers(offers: Offers, sortType: SortType): Offers {
  switch (sortType) {
    case SortType.Popular:
      return offers;
    case SortType.PriceLowToHigh:
      return [...offers].sort(
        (firstOffer, secondOffer) => firstOffer.price - secondOffer.price,
      );
    case SortType.PriceHighToLow:
      return [...offers].sort(
        (firstOffer, secondOffer) => secondOffer.price - firstOffer.price,
      );
    case SortType.TopRated:
      return [...offers].sort(
        (firstOffer, secondOffer) => secondOffer.rating - firstOffer.rating,
      );
  }
}
