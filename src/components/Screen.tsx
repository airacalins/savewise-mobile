import React from "react";

import { SafeAreaView, StyleSheet, View } from "react-native";
import { colors } from "../layouts/Colors";

interface ScreenProps {
  children: React.ReactNode;
}

export const Screen: React.FC<ScreenProps> = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screen}>{children}</View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  screen: {
    paddingVertical: 16,
  },
});
