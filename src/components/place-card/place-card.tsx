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

type PlaceCardProps = {
  offer: Offer;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

function PlaceCard({
  offer,
  onMouseEnter,
  onMouseLeave,
}: PlaceCardProps): JSX.Element {
  const { title, type, price, previewImage, isPremium, isFavorite, rating } =
    offer;

  const ratingWidth = Math.round(rating) * RATING_PERCENT_MULTIPLIER;

  return (
    <article
      className="cities__card place-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && <CardBadge className="place-card__mark" />}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
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
        <p className="place-card__type">{OfferTypeToLabel[type]}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
