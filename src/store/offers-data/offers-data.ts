import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '@/const';
import { Offers } from '@/types/offer';
import { fetchOffersAction } from '@/store/api-actions';

type OffersData = {
  offers: Offers;
  offersStatus: RequestStatus;
};

const initialState: OffersData = {
  offers: [],
  offersStatus: RequestStatus.Idle,
};

export const offersData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.offersStatus = RequestStatus.Loading;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.offersStatus = RequestStatus.Success;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.offersStatus = RequestStatus.Error;
      });
  },
});
