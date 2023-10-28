import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";

import { ActivityScreen } from "../screens/activity/ActivityScreen";
import { AddSavingsScreen } from "../screens/savings/AddSavingsScreen";
import { BottomTabParamList } from "./types";
import { Caption } from "../components/Typography";
import { colors } from "../layouts/Colors";
import { FundsScreen } from "../screens/funds/FundsScreen";
import { OffsetContainer } from "../components/Container";
import { ProfileScreen } from "../screens/profile/ProfileScreen";
import { SavingsStackNavigator } from "./SavingsStackNavigator";

const Tab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
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
      name="Savings"
      component={SavingsStackNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Funds"
      component={FundsScreen}
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
        headerRight: () => (
          <TouchableOpacity>
            <OffsetContainer>
              <Caption style={{ paddingHorizontal: 8, paddingVertical: 4 }}>
                Save
              </Caption>
            </OffsetContainer>
          </TouchableOpacity>
        ),
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
