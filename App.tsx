import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigator } from "./src/navigation/BottomTabNavigator";
import { AuthStackNavigator } from "./src/navigation/AuthStackNavigator";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        {/* <AuthStackNavigator /> */}
        <BottomTabNavigator />
      </Provider>
    </NavigationContainer>
  );
}
