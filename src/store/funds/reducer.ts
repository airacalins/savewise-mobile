import { createSlice } from "@reduxjs/toolkit";
import { FundsState } from "./types";
import { createFund, fetchFunds } from "./action";

export const initialState: FundsState = {
  isFetching: false,
  funds: [],
  fund: undefined,
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
  },
});

export const fundReducer = fundSlice.reducer;
