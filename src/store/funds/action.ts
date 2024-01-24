import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../api/agent";
import { FundInput, Fund, UpdateFundInput } from "./types";

const FUND_API = "/funds";

export const fetchFunds = createAsyncThunk<Fund[]>(
  "fetchFunds",
  async (_, thunkAPI) => {
    try {
      return await request.get(FUND_API);
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const createFund = createAsyncThunk<boolean, FundInput>(
  "createFund",
  async (fund, thunkAPI) => {
    console.log("title", fund.title);
    console.log("amount", fund.amount);
    console.log("date", fund.date);
    try {
      return await request.post(FUND_API, fund);
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const updateFund = createAsyncThunk<boolean, UpdateFundInput>(
  "updatefund",
  async (fund, thunkAPI) => {
    try {
      return await request.put(FUND_API, fund);
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);
