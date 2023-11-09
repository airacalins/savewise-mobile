import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { LoginScreen } from "../screens/auth/LoginScreen";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RegisterScreen } from "../screens/auth/RegisterScreen";

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type AuthStackProps = NativeStackScreenProps<AuthStackParamList>;

const Stack = createStackNavigator<AuthStackParamList>();

export const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
