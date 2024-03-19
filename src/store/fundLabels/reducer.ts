import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FundLabel, FundLabelType, FundLabelsState } from "./types";
import {
  createFundLabel,
  deleteFundLabel,
  fetchFundLabelById,
  fetchFundLabels,
} from "./action";

export const initialState: FundLabelsState = {
  isFetching: false,
  incomeLabels: [],
  expenseLabels: [],
  fundLabel: undefined,
  selectedFund: undefined,
};

export const fundLabelsSlice = createSlice({
  name: "fundLabels",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get fund labels
    builder.addCase(fetchFundLabels.pending, (state, _) => {
      state.isFetching = true;
    });
    builder.addCase(fetchFundLabels.fulfilled, (state, action) => {
      state.isFetching = false;
      state.incomeLabels = action.payload.filter(
        (fundLabel) => fundLabel.fundLabelType === FundLabelType.Income
      );
      state.expenseLabels = action.payload.filter(
        (fundLabel) => fundLabel.fundLabelType === FundLabelType.Expense
      );
    });
    builder.addCase(fetchFundLabels.rejected, (state, _) => {
      state.isFetching = false;
    });

    // Create fund label
    builder.addCase(createFundLabel.pending, (state, _) => {
      state.isFetching = true;
    });
    builder.addCase(createFundLabel.fulfilled, (state, _) => {
      state.isFetching = false;
    });
    builder.addCase(createFundLabel.rejected, (state, _) => {
      state.isFetching = false;
    });

    // Fetch fund label by id and assign it as selected fund
    builder.addCase(fetchFundLabelById.pending, (state, _) => {
      state.isFetching = true;
    });
    builder.addCase(fetchFundLabelById.fulfilled, (state, action) => {
      state.isFetching = false;
    });
    builder.addCase(fetchFundLabelById.rejected, (state, _) => {
      state.isFetching = false;
    });

    // Delete fund label
    builder.addCase(deleteFundLabel.pending, (state, _) => {
      state.isFetching = true;
    });
    builder.addCase(deleteFundLabel.fulfilled, (state, _) => {
      state.isFetching = false;
    });
    builder.addCase(deleteFundLabel.rejected, (state, _) => {
      state.isFetching = false;
    });
  },
});

export const fundLabelReducer = fundLabelsSlice.reducer;
