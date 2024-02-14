import { createStackNavigator } from "@react-navigation/stack";

import { AllocateFundScreen } from "../screens/funds/AllocateFundScreen";
import { FundsScreen } from "../screens/funds/FundsScreen";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FundDetailsScreen } from "../screens/funds/FundDetailsScreen";

export type FundsStackParamList = {
  Funds: undefined;
  FundDetails: { id: string };
  AllocateFund: undefined;
};

export type FundStackProps = NativeStackScreenProps<FundsStackParamList>;

const Stack = createStackNavigator<FundsStackParamList>();

export const FundsStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Funds" component={FundsScreen} />
    <Stack.Screen name="FundDetails" component={FundDetailsScreen} />
    <Stack.Screen
      name="AllocateFund"
      component={AllocateFundScreen}
      options={{ presentation: "modal" }}
    />
  </Stack.Navigator>
);
