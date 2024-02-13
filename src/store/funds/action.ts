import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../api/agent";
import { FundInput, Fund, UpdateFundInput } from "./types";

export const fetchFunds = createAsyncThunk<Fund[]>(
  "fetchFunds",
  async (_, thunkAPI) => {
    try {
      return await request.get("/funds");
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const fetchFundById = createAsyncThunk<Fund, string>(
  "fetchFundById",
  async (id, thunkAPI) => {
    try {
      return await request.get(`/funds/${id}`);
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const createFund = createAsyncThunk<boolean, FundInput>(
  "createFund",
  async (fund, thunkAPI) => {
    try {
      return await request.post("/funds", fund);
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const updateFund = createAsyncThunk<boolean, UpdateFundInput>(
  "updatefund",
  async (fund, thunkAPI) => {
    try {
      return await request.put("/funds", fund);
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);
