import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../api/agent";
import { Fund } from "./types";

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
