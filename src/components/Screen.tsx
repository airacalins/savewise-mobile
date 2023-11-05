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
import { Body, Caption, Subtitle } from "./Typography";
import { VerticalSpace } from "./Spacer";
import { CustomButton } from "./Button";

interface ScreenProps {
  title?: string;
  children: React.ReactNode;
  HeaderRightComponent?: React.ReactNode;
}

export const Screen: React.FC<ScreenProps> = ({
  title,
  children,
  HeaderRightComponent,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Padding py={16}>
        <Padding pl={16} pr={8}>
          <View style={defaultStyles.centerHorizontallyBetween}>
            <Subtitle>{title}</Subtitle>
            {HeaderRightComponent}
          </View>
        </Padding>

        {title && <View style={defaultStyles.listTileSeparator} />}

        <View style={styles.screen}>{children}</View>
      </Padding>
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
    paddingVertical: 8,
  },
  lottie: {
    width: "auto",
    height: "75%",
  },
});
