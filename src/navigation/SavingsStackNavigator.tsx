import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { SavingsScreen } from "../screens/main/SavingsScreen";
import { SavingsDetailsScreen } from "../screens/savings/SavingsDetailsScreen";
import { SavingsStackParamList } from "./types";

const SavingsStack = createStackNavigator<SavingsStackParamList>();

export const SavingsStackNavigator = () => (
  <SavingsStack.Navigator screenOptions={{ headerShown: false }}>
    <SavingsStack.Screen
      name="Savings"
      component={SavingsScreen}
      options={{ headerShown: false }}
    />
    <SavingsStack.Screen
      name="SavingsDetails"
      component={SavingsDetailsScreen}
    />
  </SavingsStack.Navigator>
);
