import React from "react";
import LottieView from "lottie-react-native";

import { StyleSheet, View } from "react-native";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { VerticalSpace } from "../Spacer";
import { Body, Caption } from "../Typography";
import { colors } from "../../layouts/Colors";

export const LoadingScreen = () => (
  <>
    <LottieView
      autoPlay
      style={styles.lottie}
      source={{
        uri: "https://lottie.host/b16dca87-c355-447f-a460-294c3a364626/18cgUdB1iO.json",
      }}
    />
  </>
);

export const styles = StyleSheet.create({
  lottie: {
    flex: 1,
  },
});
