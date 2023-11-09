import { createStackNavigator } from "@react-navigation/stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { ContactUsScreen } from "../screens/profile/ContactUsScreen";
import { NotificationScreen } from "../screens/profile/NotificationScreen";
import { PasscodeScreen } from "../screens/profile/PasscodeScreen";
import { ProfileScreen } from "../screens/profile/ProfileScreen";
import { RateUsScreen } from "../screens/profile/RateUsScreen";
import { SettingsScreen } from "../screens/profile/SettingsScreen";

export type ProfileStackParamList = {
  Profile: undefined;
  Settings: undefined;
  Notifications: undefined;
  Passcode: undefined;
  RateUs: undefined;
  ContactUs: undefined;
};

export type ProfileStackProps = NativeStackScreenProps<ProfileStackParamList>;

const Stack = createStackNavigator<ProfileStackParamList>();

export const ProfileStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="Settings" component={SettingsScreen} />
    <Stack.Screen name="Notifications" component={NotificationScreen} />
    <Stack.Screen name="Passcode" component={PasscodeScreen} />
    <Stack.Screen name="RateUs" component={RateUsScreen} />
    <Stack.Screen name="ContactUs" component={ContactUsScreen} />
  </Stack.Navigator>
);
