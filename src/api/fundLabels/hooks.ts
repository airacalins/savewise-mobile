import { request } from "../agent";
import { FundLabel } from "./types";

export const FUND_LABEL_QUERY_KEY = "fundLabels";

export const getFundLabelsByYearAndMonth = async (
  year: number,
  month: number
): Promise<FundLabel[]> => {
  const url = `/fundLabels/year/${year}/month/${month}`;
  return await request.get(url);
};
