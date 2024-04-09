import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  FundLabelViewModel,
  CreateFundLabelInputModel,
  UpdateFundLabelInputModel,
  UpdateFundLabel,
  FundLabelsByYearAndMonth,
} from "./types";
import { request } from "../../api/agent";

export const fetchFundLabels = createAsyncThunk<FundLabelViewModel[]>(
  "fetchFundLabels",
  async (_, thunkAPI) => {
    try {
      return await request.get("/fundLabels");
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const fetchFundLabelsByYearAndMonth = createAsyncThunk<
  FundLabelViewModel[],
  FundLabelsByYearAndMonth
>("fetchFundLabelsByYearAndMonth", async ({ year, month }, thunkAPI) => {
  try {
    return await request.get(`/fundLabels/year/${year}/month/${month}`);
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ error: error.data });
  }
});

export const fetchFundLabelById = createAsyncThunk<FundLabelViewModel, string>(
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
  FundLabelViewModel,
  CreateFundLabelInputModel
>("createFundLabel", async (fundLabel, thunkAPI) => {
  try {
    return await request.post("/fundLabels", fundLabel);
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ error: error.data });
  }
});

export const updateFundLabel = createAsyncThunk<boolean, UpdateFundLabel>(
  "updateFundLabel",
  async (updateFundLabel, thunkAPI) => {
    try {
      const fundLabel: UpdateFundLabelInputModel = {
        title: updateFundLabel.title,
      };

      return await request.put(`/fundLabels/${updateFundLabel.id}`, fundLabel);
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
