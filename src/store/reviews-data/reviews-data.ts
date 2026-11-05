import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '@/const';
import { Reviews } from '@/types/review';
import { fetchReviewsAction } from '@/store/api-actions';

type ReviewsData = {
  reviews: Reviews;
};

const initialState: ReviewsData = {
  reviews: [],
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
      });
  },
});
