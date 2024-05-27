import { FundLabel } from "../fundLabels/types";

export type Fund = {
  id: string;
  fundLabel: FundLabel;
  fundLabelId: string;
  amount: number;
  date: string;
};

export type CreateFundRequest = Omit<Fund, "id" | "fundLabel">;

export type UpdateFundRequest = Omit<Fund, "id" | "fundLabel">;
