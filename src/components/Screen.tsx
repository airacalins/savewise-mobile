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
import { Body, Caption } from "./Typography";
import { VerticalSpace } from "./Spacer";

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
  <>
    <View style={[defaultStyles.center, { flex: 1 }]}>
      <Body>This feature is building for you</Body>
      <VerticalSpace spacer={8} />
      <Caption>- Savewise -</Caption>
      <VerticalSpace spacer={32} />
    </View>
    <LottieView
      autoPlay
      style={styles.lottie}
      source={{
        uri: "https://lottie.host/7885bfd9-c9ba-4419-8b5d-b8ad89765bd1/RlqXGOWk3v.json",
      }}
    />
  </>
);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  screen: {
    paddingVertical: 16,
  },
  lottie: {
    width: "auto",
    height: "75%",
  },
});
