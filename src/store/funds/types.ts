export interface FundsState {
  isFetching: boolean;
  funds: Fund[];
  fund?: Fund;
}

export interface Fund {
  id: string;
  image: string;
  title: string;
  amount: number;
  createdAt: string;
}

export interface AddFund {
  title: string;
  amount: number;
  createdAt: string;
}