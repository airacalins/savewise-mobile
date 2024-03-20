export interface FundLabelsState {
  isFetching: boolean;
  incomeLabels: FundLabel[];
  expenseLabels: FundLabel[];
  selectedFundLabel?: FundLabel;
}

export enum FundLabelType {
  Income,
  Expense,
}

export interface FundLabel {
  id: string;
  title: string;
  fundLabelType: FundLabelType;
  isDeleted: boolean;
}

export interface CreateFundLabelInput {
  title: string;
  fundLabelType: FundLabelType;
}

export interface UpdateFundLabelInput {
  title: string;
}
