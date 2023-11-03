import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigator } from "./src/navigation/BottomTabNavigator";
import { AuthStackNavigator } from "./src/navigation/AuthStackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AuthStackNavigator />
      {/* <BottomTabNavigator /> */}
    </NavigationContainer>
  );
}
