import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/main/HomeScreen";
import { SavingsDetailsScreen } from "../screens/savings/SavingsDetailsScreen";

const Stack = createNativeStackNavigator();

export const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="SavingsDetails" component={SavingsDetailsScreen} />
  </Stack.Navigator>
);
