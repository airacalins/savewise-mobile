import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  FundLabelViewModel,
  FundLabelType,
  FundLabelsState,
  MonthAndYear,
} from "./types";
import {
  createFundLabel,
  deleteFundLabel,
  fetchFundLabelById,
  fetchFundLabels,
  fetchFundLabelsByYearAndMonth,
  updateFundLabel,
} from "./action";

const currentDate = new Date();

export const initialState: FundLabelsState = {
  isFetching: false,
  incomeLabels: [],
  expenseLabels: [],
  selectedFundLabel: undefined,
  selectedMonthAndYear: {
    year: currentDate.getFullYear(),
    month: currentDate.getMonth() + 1,
  },
};

export const fundLabelsSlice = createSlice({
  name: "fundLabels",
  initialState: initialState,
  reducers: {
    setSelectedFundLabel: (
      state: FundLabelsState,
      action: PayloadAction<FundLabelViewModel | undefined>
    ) => {
      state.selectedFundLabel = action.payload;
    },
    setSelectedMonthAndYear: (
      state: FundLabelsState,
      action: PayloadAction<MonthAndYear>
    ) => {
      state.selectedMonthAndYear = action.payload;
    },
  },
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

    // Get fund labels by year and month
    builder.addCase(fetchFundLabelsByYearAndMonth.pending, (state, _) => {
      state.isFetching = true;
    });
    builder.addCase(
      fetchFundLabelsByYearAndMonth.fulfilled,
      (state, action) => {
        state.isFetching = false;
        state.incomeLabels = action.payload.filter(
          (fundLabel) => fundLabel.fundLabelType === FundLabelType.Income
        );
        state.expenseLabels = action.payload.filter(
          (fundLabel) => fundLabel.fundLabelType === FundLabelType.Expense
        );
      }
    );
    builder.addCase(fetchFundLabelsByYearAndMonth.rejected, (state, _) => {
      state.isFetching = false;
    });

    // Fetch fund label by id and assign it as selected fund
    builder.addCase(fetchFundLabelById.pending, (state, _) => {
      state.isFetching = true;
    });
    builder.addCase(fetchFundLabelById.fulfilled, (state, action) => {
      state.isFetching = false;
      state.selectedFundLabel = action.payload;
    });
    builder.addCase(fetchFundLabelById.rejected, (state, _) => {
      state.isFetching = false;
    });

    // Create fund label
    builder.addCase(createFundLabel.pending, (state, _) => {
      state.isFetching = true;
    });
    builder.addCase(createFundLabel.fulfilled, (state, action) => {
      state.selectedFundLabel = action.payload;
      state.isFetching = false;
    });
    builder.addCase(createFundLabel.rejected, (state, _) => {
      state.isFetching = false;
    });

    // Update fund label
    builder.addCase(updateFundLabel.pending, (state, _) => {
      state.isFetching = true;
    });
    builder.addCase(updateFundLabel.fulfilled, (state, _) => {
      state.isFetching = false;
    });
    builder.addCase(updateFundLabel.rejected, (state, _) => {
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

export const { setSelectedFundLabel, setSelectedMonthAndYear } =
  fundLabelsSlice.actions;

export const fundLabelReducer = fundLabelsSlice.reducer;
