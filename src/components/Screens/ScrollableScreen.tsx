import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from "react-native";

import { colors } from "../../layouts/Colors";

interface ScreenProps {
  children: React.ReactNode;
  isRefreshing?: boolean;
  onRefresh?: () => void;
}
export const ScrollableScreen: React.FC<ScreenProps> = ({
  children,
  isRefreshing = false,
  onRefresh,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
        style={styles.screen}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  screen: {
    padding: 8,
  },
  lottie: {
    width: "auto",
    height: "75%",
  },
});
