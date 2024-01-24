import React from "react";
import LottieView from "lottie-react-native";

import { StyleSheet } from "react-native";

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
