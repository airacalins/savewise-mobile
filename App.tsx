import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigator } from "./src/navigation/BottomTabNavigator";
import { AuthStackNavigator } from "./src/navigation/AuthStackNavigator";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}
