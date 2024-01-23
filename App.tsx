import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigator } from "./src/navigation/BottomTabNavigator";
import { AuthStackNavigator } from "./src/navigation/AuthStackNavigator";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        {/* <AuthStackNavigator /> */}
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <BottomTabNavigator />
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </Provider>
    </NavigationContainer>
  );
}
