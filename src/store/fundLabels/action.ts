import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  FundLabel,
  CreateFundLabelInput,
  UpdateFundLabelInput,
  UpdateFundLabel,
} from "./types";
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
      const fundLabel: UpdateFundLabelInput = {
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
