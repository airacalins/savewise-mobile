import React from "react";
import LottieView from "lottie-react-native";

import { StyleSheet, View } from "react-native";
import { colors } from "../../layouts/Colors";

export const LoadingScreen = () => (
  <View style={styles.container}>
    <LottieView
      autoPlay
      source={{
        uri: "https://lottie.host/b16dca87-c355-447f-a460-294c3a364626/18cgUdB1iO.json",
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
