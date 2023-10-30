import type { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type BottomTabParamList = {
  HomeStackNavigator: NavigatorScreenParams<HomeStackParamList>;
  FundsStackNavigator: NavigatorScreenParams<FundsStackParamList>;
  AddSavings: undefined;
  Activity: undefined;
  Profile: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  SavingsDetails: undefined;
};

export type FundsStackParamList = {
  Funds: undefined;
  FundDetailsStackNavigator: undefined;
  CashIn: undefined;
  CashOut: undefined;
  AllocateFund: undefined;
};
export type FundsStackProps = NativeStackScreenProps<FundsStackParamList>;

export type FundDetailsStackParamList = {
  FundDetails: undefined;
  CashIn: undefined;
  CashOut: undefined;
  AllocateFund: undefined;
};
export type FundDetailsStackProps =
  NativeStackScreenProps<FundDetailsStackParamList>;
