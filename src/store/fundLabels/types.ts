export interface FundLabelsState {
  isFetching: boolean;
  incomeLabels: FundLabelViewModel[];
  expenseLabels: FundLabelViewModel[];
  selectedFundLabel?: FundLabelViewModel;
}

export enum FundLabelType {
  Income,
  Expense,
}

export interface FundLabelViewModel {
  id: string;
  title: string;
  fundLabelType: FundLabelType;
  isDeleted: boolean;
}

export interface CreateFundLabelInputModel {
  title: string;
  fundLabelType: FundLabelType;
}

export interface UpdateFundLabelInputModel {
  title: string;
}

export interface UpdateFundLabel {
  id: string;
  title: string;
}

export interface FundLabelsByYearAndMonth {
  year: number;
  month: number;
}
