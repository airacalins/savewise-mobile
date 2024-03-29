import { createSlice } from "@reduxjs/toolkit";
import { FundsState } from "./types";
import {
  createFund,
  deleteFund,
  fetchFundById,
  fetchFunds,
  fetchFundsByFundLabelId,
} from "./action";
import { fetchFundLabelById } from "../fundLabels/action";
import { FundLabelType } from "../fundLabels/types";

export const initialState: FundsState = {
  isFetching: false,
  funds: [],
  incomeFunds: [],
  expenseFunds: [],
  fundsPerLabel: [],
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
      state.incomeFunds = action.payload.filter(
        (incomeFund) =>
          incomeFund.fundLabel.fundLabelType === FundLabelType.Income
      );
      state.expenseFunds = action.payload.filter(
        (incomeFund) =>
          incomeFund.fundLabel.fundLabelType === FundLabelType.Expense
      );
    });
    builder.addCase(fetchFunds.rejected, (state, _) => {
      state.isFetching = false;
    });

    // Get funds by fund label id
    builder.addCase(fetchFundsByFundLabelId.pending, (state, _) => {
      state.isFetching = true;
    });
    builder.addCase(fetchFundsByFundLabelId.fulfilled, (state, action) => {
      state.isFetching = false;
      state.fundsPerLabel = action.payload;
    });
    builder.addCase(fetchFundsByFundLabelId.rejected, (state, _) => {
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
