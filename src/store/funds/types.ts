import { FundLabelViewModel } from "../fundLabels/types";

export interface FundsState {
  isFetching: boolean;
  funds: Fund[];
  incomeFunds: Fund[];
  expenseFunds: Fund[];
  fundsPerLabel: Fund[];
  fund?: Fund;
  selectedFund?: Fund;
}

export interface Fund {
  id: string;
  fundLabel: FundLabelViewModel;
  image: string;
  title: string;
  amount: number;
  date: string;
  createdAt: string;
}

export interface CreateFundInput {
  fundLabelId: string;
  amount: number;
  date: string;
}

export interface UpdateFundInput {
  id: string;
  title: string;
  amount: number;
  date: string;
}
