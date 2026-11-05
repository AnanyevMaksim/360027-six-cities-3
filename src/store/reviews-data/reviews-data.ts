import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '@/const';
import { Reviews } from '@/types/review';
import { fetchReviewsAction, postReviewAction } from '@/store/api-actions';

type ReviewsData = {
  reviews: Reviews;
  reviewPostStatus: RequestStatus;
};

const initialState: ReviewsData = {
  reviews: [],
  reviewPostStatus: RequestStatus.Idle,
};

export const reviewsData = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.pending, (state) => {
        state.reviews = [];
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(postReviewAction.pending, (state) => {
        state.reviewPostStatus = RequestStatus.Loading;
      })
      .addCase(postReviewAction.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
        state.reviewPostStatus = RequestStatus.Success;
      })
      .addCase(postReviewAction.rejected, (state) => {
        state.reviewPostStatus = RequestStatus.Error;
      });
  },
});
