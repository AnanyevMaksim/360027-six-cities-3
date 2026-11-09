import { createSelector } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '@/const';
import { State } from '@/types/state';

const MAX_SHOWN_REVIEWS_COUNT = 10;

export const selectReviews = (state: State) => state[NameSpace.Reviews].reviews;

export const selectReviewPostRequestStatus = (state: State) =>
  state[NameSpace.Reviews].reviewPostStatus;

export const selectShownReviews = createSelector([selectReviews], (reviews) =>
  [...reviews]
    .sort(
      (firstReview, secondReview) =>
        Date.parse(secondReview.date) - Date.parse(firstReview.date),
    )
    .slice(0, MAX_SHOWN_REVIEWS_COUNT),
);

export const selectReviewPostStatus = createSelector(
  [selectReviewPostRequestStatus],
  (status) => ({
    isLoading: status === RequestStatus.Loading,
    isSuccess: status === RequestStatus.Success,
  }),
);
