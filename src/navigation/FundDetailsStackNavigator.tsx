import { createStackNavigator } from "@react-navigation/stack";

import { AllocateFundScreen } from "../screens/funds/AllocateFundScreen";
import { FundDetailsScreen } from "../screens/funds/FundDetailsScreen";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type FundDetailsStackParamList = {
  FundDetails: undefined;
  CashIn: undefined;
  CashOut: undefined;
  AllocateFund: undefined;
};

export type FundDetailsStackProps =
  NativeStackScreenProps<FundDetailsStackParamList>;

const Stack = createStackNavigator<FundDetailsStackParamList>();

export const FundDetailsStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="FundDetails" component={FundDetailsScreen} />
    <Stack.Screen name="AllocateFund" component={AllocateFundScreen} />
  </Stack.Navigator>
);
