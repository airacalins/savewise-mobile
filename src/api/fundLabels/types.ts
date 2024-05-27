export enum FundLabelType {
  Income,
  Expense,
}

export type FundLabel = {
  id: string;
  title: string;
  fundLabelType: FundLabelType;
  dateCreated: string;
};

export type CreateFundLabelRequest = Omit<FundLabel, "id" | "dateCreated">;

export type UpdateFundLabelRequest = Omit<FundLabel, "dateCreated">;
