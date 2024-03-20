import { createAsyncThunk } from "@reduxjs/toolkit";

import { FundLabel, CreateFundLabelInput, UpdateFundLabelInput } from "./types";
import { request } from "../../api/agent";

export const fetchFundLabels = createAsyncThunk<FundLabel[]>(
  "fetchFundLabels",
  async (_, thunkAPI) => {
    try {
      return await request.get("/fundLabels");
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const fetchFundLabelById = createAsyncThunk<FundLabel, string>(
  "fetchFundLabelById",
  async (id, thunkAPI) => {
    try {
      return await request.get(`/fundLabels/${id}`);
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const createFundLabel = createAsyncThunk<
  FundLabel,
  CreateFundLabelInput
>("createFundLabel", async (FundLabel, thunkAPI) => {
  try {
    return await request.post("/FundLabels", FundLabel);
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ error: error.data });
  }
});

export const updateFundLabel = createAsyncThunk<boolean, UpdateFundLabelInput>(
  "updateFundLabel",
  async (fetchFundLabelByIdundLabel, thunkAPI) => {
    try {
      return await request.put("/fundLabels", fetchFundLabelByIdundLabel);
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const deleteFundLabel = createAsyncThunk<boolean, string>(
  "deleteFundLabel",
  async (id, thunkAPI) => {
    try {
      return await request.del(`/fundLabels/${id}`);
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ errror: error.data });
    }
  }
);
