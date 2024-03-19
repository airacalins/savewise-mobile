// import { userReducer } from './auth/reducer';

import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { fundReducer } from "./funds/reducer";
import { fundLabelReducer } from "./fundLabels/reducer";

export const store = configureStore({
  reducer: {
    fund: fundReducer,
    fundLabel: fundLabelReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
