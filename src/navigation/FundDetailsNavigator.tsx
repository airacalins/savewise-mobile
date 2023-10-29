import { createStackNavigator } from "@react-navigation/stack";
import { FundsScreen } from "../screens/funds/FundsScreen";
import { FundDetailsScreen } from "../screens/funds/FundDetailsScreen";
import { FundDetailsStackParamList } from "./types";
import { CashInScreen } from "../screens/funds/CashInScreen";
import { CashOutScreen } from "../screens/funds/CashOutScreen";
import { AllocateFundScreen } from "../screens/funds/AllocateFundScreen";

const Stack = createStackNavigator<FundDetailsStackParamList>();

export const FundDetailsStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="FundDetails" component={FundDetailsScreen} />
    <Stack.Screen name="CashIn" component={CashInScreen} />
    <Stack.Screen name="CashOut" component={CashOutScreen} />
    <Stack.Screen name="AllocateFund" component={AllocateFundScreen} />
  </Stack.Navigator>
);
