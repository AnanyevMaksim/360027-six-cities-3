import { CITIES } from '@/const';
import { User } from './review';

export type OfferType = 'apartment' | 'room' | 'house' | 'hotel';

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  name: string;
  location: Location;
};

export type Offer = {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  city: City;
  location: Location;
  previewImage: string;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
};

export type Offers = Offer[];

export type FullOffer = Omit<Offer, 'previewImage'> & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: User;
  images: string[];
  maxAdults: number;
};

export type CityName = (typeof CITIES)[number];
