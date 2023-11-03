import React from "react";
import { Image, StyleSheet } from "react-native";
import { colors } from "../layouts/Colors";

interface CircularImageProps {
  source: string;
}

export const CircularImage: React.FC<CircularImageProps> = ({ source }) => {
  return (
    <Image
      style={styles.container}
      source={{
        uri: source,
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    height: 50,
    width: 50,
  },
});
