import clsx from 'clsx';
import { Offer, OfferType } from '@/types/offer';
import CardBadge from '@/components/card-badge/card-badge';
import BookmarkButton from '@/components/bookmark-button/bookmark-button';

const MAX_RATING = 5;
const RATING_PERCENT_MULTIPLIER = 100 / MAX_RATING;

const OfferTypeToLabel: Record<OfferType, string> = {
  apartment: 'Apartment',
  room: 'Room',
  house: 'House',
  hotel: 'Hotel',
};

type PlaceCardType = 'cities' | 'favorites';

type PlaceCardSettings = {
  articleClassName: string;
  imageWrapperClassName: string;
  infoClassName: string;
  imageWidth: number;
  imageHeight: number;
};

const PlaceCardTypeToSettings: Record<PlaceCardType, PlaceCardSettings> = {
  cities: {
    articleClassName: 'cities__card',
    imageWrapperClassName: 'cities__image-wrapper',
    infoClassName: '',
    imageWidth: 260,
    imageHeight: 200,
  },
  favorites: {
    articleClassName: 'favorites__card',
    imageWrapperClassName: 'favorites__image-wrapper',
    infoClassName: 'favorites__card-info',
    imageWidth: 150,
    imageHeight: 110,
  },
};

type PlaceCardProps = {
  offer: Offer;
  type: PlaceCardType;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

function PlaceCard({
  offer,
  type,
  onMouseEnter,
  onMouseLeave,
}: PlaceCardProps): JSX.Element {
  const {
    title,
    type: offerType,
    price,
    previewImage,
    isPremium,
    isFavorite,
    rating,
  } = offer;

  const ratingWidth = Math.round(rating) * RATING_PERCENT_MULTIPLIER;
  const settings = PlaceCardTypeToSettings[type];

  return (
    <article
      className={clsx(settings.articleClassName, 'place-card')}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && <CardBadge className="place-card__mark" />}
      <div
        className={clsx(
          settings.imageWrapperClassName,
          'place-card__image-wrapper',
        )}
      >
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width={settings.imageWidth}
            height={settings.imageHeight}
            alt="Place image"
          />
        </a>
      </div>
      <div className={clsx(settings.infoClassName, 'place-card__info')}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <BookmarkButton isActive={isFavorite} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ratingWidth}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{OfferTypeToLabel[offerType]}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
