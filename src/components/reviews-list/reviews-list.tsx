import { Reviews } from '@/types/review';
import ReviewItem from '@/components/review-item/review-item';

type ReviewsListProps = {
  reviews: Reviews;
  reviewsCount: number;
};

function ReviewsList({ reviews, reviewsCount }: ReviewsListProps): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviewsCount}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </ul>
    </>
  );
}

export default ReviewsList;
