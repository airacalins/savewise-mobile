import { request } from "../agent";
import {
  CreateFundLabelRequest,
  FundLabel,
  UpdateFundLabelRequest,
} from "./types";

export const FUND_LABEL_QUERY_KEY = "fundLabels";

export const getFundLabelsByYearAndMonth = async (
  year: number,
  month: number
): Promise<FundLabel[]> => {
  const url = `/fundLabels/year/${year}/month/${month}`;
  return await request.get(url);
};

export const getFundLabelById = async (id: string): Promise<FundLabel> => {
  const url = `/fundLabels/${id}`;
  return await request.get(url);
};

export const createFundLabel = async (fundLabel: CreateFundLabelRequest) => {
  const url = "/fundLabels";
  return await request.post(url, fundLabel);
};

export const updateFundLabel = async (fundLabel: UpdateFundLabelRequest) => {
  const url = `/fundLabels/${fundLabel.id}`;
  return await request.put(url, fundLabel);
};
