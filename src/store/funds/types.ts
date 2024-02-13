export interface FundsState {
  isFetching: boolean;
  funds: Fund[];
  fund?: Fund;
  selectedFund?: Fund;
}

export interface Fund {
  id: string;
  image: string;
  title: string;
  amount: number;
  date: string;
  createdAt: string;
}

export interface FundInput {
  title: string;
  amount: number;
  date: string;
}

export interface UpdateFundInput {
  id: string;
  title: string;
  amount: number;
  date: string;
}
