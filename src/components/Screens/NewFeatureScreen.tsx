import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

import { Body, Caption } from "../Typography";
import { colors } from "../../layouts/Colors";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { Screen } from "../Screens/Screen";
import { VerticalSpace } from "../Spacer";

export const NewFeatureSceen = () => (
  <Screen>
    <View style={[defaultStyles.center, { flex: 1 }]}>
      <Body text="This feature is building for you" />
      <VerticalSpace spacer={8} />
      <Caption text="- Savewise -" />
      <VerticalSpace spacer={32} />
    </View>
    <LottieView
      autoPlay
      style={styles.lottie}
      source={{
        uri: "https://lottie.host/7885bfd9-c9ba-4419-8b5d-b8ad89765bd1/RlqXGOWk3v.json",
      }}
    />
  </Screen>
);

const styles = StyleSheet.create({
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
