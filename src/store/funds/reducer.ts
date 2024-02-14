import { createSlice } from "@reduxjs/toolkit";
import { FundsState } from "./types";
import { createFund, deleteFund, fetchFundById, fetchFunds } from "./action";

export const initialState: FundsState = {
  isFetching: false,
  funds: [],
  fund: undefined,
  selectedFund: undefined,
};

export const fundSlice = createSlice({
  name: "funds",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get funds
    builder.addCase(fetchFunds.pending, (state, _) => {
      state.isFetching = true;
    });
    builder.addCase(fetchFunds.fulfilled, (state, action) => {
      state.isFetching = false;
      state.funds = action.payload;
    });
    builder.addCase(fetchFunds.rejected, (state, _) => {
      state.isFetching = false;
    });

    // Create fund
    builder.addCase(createFund.pending, (state, _) => {
      state.isFetching = true;
    });
    builder.addCase(createFund.fulfilled, (state, _) => {
      state.isFetching = false;
    });
    builder.addCase(createFund.rejected, (state, _) => {
      state.isFetching = false;
    });

    // Fetch fund by id and assign it as selected fund
    builder.addCase(fetchFundById.pending, (state, _) => {
      state.isFetching = true;
    });
    builder.addCase(fetchFundById.fulfilled, (state, action) => {
      state.isFetching = false;
      state.selectedFund = action.payload;
    });
    builder.addCase(fetchFundById.rejected, (state, _) => {
      state.isFetching = false;
    });

    // Delete fund
    builder.addCase(deleteFund.pending, (state, _) => {
      state.isFetching = true;
    });
    builder.addCase(deleteFund.fulfilled, (state, _) => {
      state.isFetching = false;
    });
    builder.addCase(deleteFund.rejected, (state, _) => {
      state.isFetching = false;
    });
  },
});

export const fundReducer = fundSlice.reducer;
