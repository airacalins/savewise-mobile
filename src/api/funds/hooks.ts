import { UseQueryOptions } from "@tanstack/react-query";
import { request } from "../agent";
import { Fund } from "./types";

export const FUNDS_QUERY_KEY = "funds";

export const getFunds = async (): Promise<Fund[]> => {
  const url = "/funds";
  return await request.get(url);
};

export const getFundsByYearAndMonth = async (
  year: number,
  month: number
): Promise<Fund[]> => {
  const url = `/funds/year/${year}/month/${month}`;
  return await request.get(url);
};
