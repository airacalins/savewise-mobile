import React from "react";
import LottieView from "lottie-react-native";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { colors } from "../layouts/Colors";
import { Padding } from "./Padding";
import { defaultStyles } from "../layouts/DefaultStyles";

interface ScreenProps {
  children: React.ReactNode;
}

export const Screen: React.FC<ScreenProps> = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.screen}>{children}</View>
    </SafeAreaView>
  );
};

export const ScrollableScreen: React.FC<ScreenProps> = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.screen}>{children}</ScrollView>
    </SafeAreaView>
  );
};

export const NewFeatureSceen = () => (
  <View style={defaultStyles.center}>
    <Padding p={32}>
      <LottieView
        autoPlay
        style={{
          width: 500,
        }}
        source={{
          uri: "https://lottie.host/7885bfd9-c9ba-4419-8b5d-b8ad89765bd1/RlqXGOWk3v.json",
        }}
      />
    </Padding>
  </View>
);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  screen: {
    paddingVertical: 16,
  },
});
