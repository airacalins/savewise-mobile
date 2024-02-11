import { colors } from "../../layouts/Colors";
import { SafeAreaView, StatusBar, StyleSheet, ScrollView } from "react-native";

interface ScreenProps {
  title?: string;
  children: React.ReactNode;
  HeaderRightComponent?: React.ReactNode;
}
export const ScrollableScreen: React.FC<ScreenProps> = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.screen}>{children}</ScrollView>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  screen: {
    paddingVertical: 8,
  },
  lottie: {
    width: "auto",
    height: "75%",
  },
});
