import type { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type BottomTabParamList = {
  Savings: NavigatorScreenParams<SavingsStackParamList>;
  Funds: NavigatorScreenParams<FundsStackParamList>;
  AddSavings: undefined;
  Activity: undefined;
  Profile: undefined;
};

export type SavingsStackParamList = {
  Savings: undefined;
  SavingsDetails: undefined;
};

export type FundsStackParamList = {
  Funds: undefined;
  FundDetails: undefined;
  CashIn: undefined;
  CashOut: undefined;
  AllocateFund: undefined;
};
export type FundsStackProps = NativeStackScreenProps<FundsStackParamList>;
