import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { SavingsScreen } from "../screens/main/SavingsScreen";
import { SavingsDetailsScreen } from "../screens/savings/SavingsDetailsScreen";
import { SavingsStackParamList } from "./types";

const Stack = createStackNavigator<SavingsStackParamList>();

export const SavingsStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="Savings"
      component={SavingsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="SavingsDetails" component={SavingsDetailsScreen} />
  </Stack.Navigator>
);
