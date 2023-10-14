import { SafeAreaView, View } from "react-native";
import { Text } from "react-native";
import { defaultStyles } from "./src/layouts/DefaultStyles";
import { HomeScreen } from "./src/screens/main/HomeScreen";
import { useFonts } from "expo-font";

export default function App() {
  return (
    <View style={defaultStyles.screen}>
      <HomeScreen />
    </View>
  );
}
