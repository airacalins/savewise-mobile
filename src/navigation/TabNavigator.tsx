import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AddSavingsScreen } from "../screens/savings/AddSavingsScreen";
import { ProfileScreen } from "../screens/profile/ProfileScreen";
import { HomeNavigator } from "./HomeNavigator";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Button, TouchableOpacity, View } from "react-native";
import { colors } from "../layouts/Colors";
import { AddSavingsButton } from "./components/AddSavingsButton";
import { OffsetContainer } from "../components/Container";
import { Caption } from "../components/Typography";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => (
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
      name="Home"
      component={HomeNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="AddSavings"
      component={AddSavingsScreen}
      options={({ navigation }) => ({
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTitle: "Add new savings",
        headerRight: () => (
          <TouchableOpacity>
            <OffsetContainer>
              <Caption sx={{ paddingHorizontal: 16, paddingVertical: 8 }}>
                Save
              </Caption>
            </OffsetContainer>
          </TouchableOpacity>
        ),
        tabBarButton: () => (
          <AddSavingsButton
            onPress={() => {
              navigation.navigate("AddSavings");
            }}
          />
        ),
      })}
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
