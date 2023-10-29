import { createStackNavigator } from "@react-navigation/stack";

import { AllocateFundScreen } from "../screens/funds/AllocateFundScreen";
import { CashInScreen } from "../screens/funds/CashInScreen";
import { CashOutScreen } from "../screens/funds/CashOutScreen";
import { FundsScreen } from "../screens/funds/FundsScreen";
import { FundsStackParamList } from "./types";
import { FundDetailsStackNavigator } from "./FundDetailsNavigator";

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
      name="FundDetailsStackNavigator"
      component={FundDetailsStackNavigator}
      options={{ presentation: "modal" }}
    />
  </Stack.Navigator>
);
