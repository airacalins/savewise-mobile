import { createStackNavigator } from "@react-navigation/stack";
import { FundsStackParamList } from "./types";
import { FundsScreen } from "../screens/funds/FundsScreen";
import { CashInScreen } from "../screens/funds/CashInScreen";
import { CashOutScreen } from "../screens/funds/CashOutScreen";
import { FundDetailsScreen } from "../screens/funds/FundDetailsScreen";
import { AllocateFundScreen } from "../screens/funds/AllocateFundScreen";

const Stack = createStackNavigator<FundsStackParamList>();

export const FundsStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Funds" component={FundsScreen} />
    <Stack.Screen
      name="CashIn"
      component={CashInScreen}
      options={{ presentation: "modal" }}
    />
    <Stack.Screen
      name="CashOut"
      component={CashOutScreen}
      options={{ presentation: "modal" }}
    />
    <Stack.Screen
      name="AllocateFund"
      component={AllocateFundScreen}
      options={{ presentation: "modal" }}
    />
    <Stack.Screen
      name="FundDetails"
      component={FundDetailsScreen}
      options={{ presentation: "modal" }}
    />
  </Stack.Navigator>
);
