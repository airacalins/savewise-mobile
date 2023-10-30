import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { SavingsDetailsScreen } from "../screens/savings/SavingsDetailsScreen";
import { HomeStackParamList } from "./types";
import { HomeScreen } from "../screens/home/HomeScreen";

const Stack = createStackNavigator<HomeStackParamList>();

export const HomeStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="SavingsDetails" component={SavingsDetailsScreen} />
  </Stack.Navigator>
);
