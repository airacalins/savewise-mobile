import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native";

import { ActivityScreen } from "../screens/activity/ActivityScreen";
import { AddSavingsScreen } from "../screens/savings/AddSavingsScreen";
import { BottomTabParamList } from "./types";
import { colors } from "../layouts/Colors";
import { OffsetContainer } from "../components/Container";
import { ProfileScreen } from "../screens/profile/ProfileScreen";
import { FundsStackNavigator } from "./FundStackNavigator";
import { HomeStackNavigator } from "./HomeStackNavigator";

const Tab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: colors.dark,
      tabBarInactiveTintColor: colors.grey,
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: colors.background,
        borderBlockColor: colors.background,
      },
    }}
  >
    <Tab.Screen
      name="HomeStackNavigator"
      component={HomeStackNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="FundsStackNavigator"
      component={FundsStackNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="attach-money" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="AddSavings"
      component={AddSavingsScreen}
      options={({ navigation }) => ({
        headerTitle: "Add new savings",
        headerStyle: {
          backgroundColor: colors.background,
        },

        tabBarButton: () => (
          <OffsetContainer backgroundColor={colors.dark}>
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate("AddSavings");
              }}
            >
              <Entypo name="plus" size={32} color={colors.background} />
            </TouchableWithoutFeedback>
          </OffsetContainer>
        ),
      })}
    />
    <Tab.Screen
      name="Activity"
      component={ActivityScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="graph-outline"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="user" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);
