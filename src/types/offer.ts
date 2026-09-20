export type OfferType = 'apartment' | 'room' | 'house' | 'hotel';

export type Offer = {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  city: string;
  previewImage: string;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
};

export type Offers = Offer[];
