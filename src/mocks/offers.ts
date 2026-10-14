import { City, Offers } from '@/types/offer';

const PARIS: City = {
  name: 'Paris',
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 12,
  },
};

const AMSTERDAM: City = {
  name: 'Amsterdam',
  location: {
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 12,
  },
};

export const offers: Offers = [
  {
    id: '1',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 120,
    city: AMSTERDAM,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
    previewImage: 'img/apartment-01.jpg',
    isPremium: true,
    isFavorite: false,
    rating: 4,
  },
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'room',
    price: 80,
    city: AMSTERDAM,
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
    previewImage: 'img/room.jpg',
    isPremium: false,
    isFavorite: true,
    rating: 4,
  },
  {
    id: '3',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 132,
    city: AMSTERDAM,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16,
    },
    previewImage: 'img/apartment-02.jpg',
    isPremium: false,
    isFavorite: false,
    rating: 4,
  },
  {
    id: '4',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 180,
    city: AMSTERDAM,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16,
    },
    previewImage: 'img/apartment-03.jpg',
    isPremium: true,
    isFavorite: false,
    rating: 5,
  },
  {
    id: '5',
    title: 'Cozy studio near the Louvre',
    type: 'apartment',
    price: 150,
    city: PARIS,
    location: {
      latitude: 48.8606,
      longitude: 2.3376,
      zoom: 16,
    },
    previewImage: 'img/apartment-02.jpg',
    isPremium: true,
    isFavorite: false,
    rating: 4.6,
  },
  {
    id: '6',
    title: 'Quiet room in Le Marais',
    type: 'room',
    price: 90,
    city: PARIS,
    location: {
      latitude: 48.8575,
      longitude: 2.3622,
      zoom: 16,
    },
    previewImage: 'img/room.jpg',
    isPremium: false,
    isFavorite: true,
    rating: 3.8,
  },
  {
    id: '7',
    title: 'Hotel with a view of Montmartre',
    type: 'hotel',
    price: 210,
    city: PARIS,
    location: {
      latitude: 48.8867,
      longitude: 2.3431,
      zoom: 16,
    },
    previewImage: 'img/apartment-03.jpg',
    isPremium: false,
    isFavorite: false,
    rating: 4.9,
  },
];
