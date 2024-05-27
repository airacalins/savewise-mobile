import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";

import { colors } from "../../layouts/Colors";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { Subtitle } from "../Typography";

interface ScreenProps {
  children: React.ReactNode;
}

export const Screen: React.FC<ScreenProps> = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headerContainer: {
    padding: 16,
    paddingRight: 8,
    ...defaultStyles.centerHorizontallyBetween,
  },
  content: {
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
});
