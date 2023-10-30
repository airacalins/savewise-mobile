import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { SavingsDetailsScreen } from "../screens/savings/SavingsDetailsScreen";
import { HomeScreen } from "../screens/home/HomeScreen";
import { NotificationScreen } from "../screens/profile/NotificationScreen";

export type HomeStackParamList = {
  Home: undefined;
  Notification: undefined;
  SavingsDetails: undefined;
};

const Stack = createStackNavigator<HomeStackParamList>();

export const HomeStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Notification" component={NotificationScreen} />
    <Stack.Screen name="SavingsDetails" component={SavingsDetailsScreen} />
  </Stack.Navigator>
);
