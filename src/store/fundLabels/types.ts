export interface FundLabelsState {
  isFetching: boolean;
  incomeLabels: FundLabelViewModel[];
  expenseLabels: FundLabelViewModel[];
  selectedFundLabel?: FundLabelViewModel;
  selectedMonthAndYear: MonthAndYear;
}

export enum FundLabelType {
  Income,
  Expense,
}

export interface FundLabelViewModel {
  id: string;
  title: string;
  fundLabelType: FundLabelType;
  dateCreated: string;
  dateDeleted?: string;
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

export interface MonthAndYear {
  year: number;
  month: number;
}
