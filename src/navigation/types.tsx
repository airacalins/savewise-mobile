import type { NavigatorScreenParams } from "@react-navigation/native";

export type BottomTabParamList = {
  Savings: NavigatorScreenParams<SavingsStackParamList>;
  Funds: undefined;
  AddSavings: undefined;
  Activity: undefined;
  Profile: undefined;
};

export type SavingsStackParamList = {
  Savings: undefined;
  SavingsDetails: undefined;
};
