import React from "react";
import { Image } from "react-native";
import { colors } from "../layouts/Colors";

interface CircularImageProps {
  source: string;
}

export const CircularImage: React.FC<CircularImageProps> = ({ source }) => {
  return (
    <Image
      style={{
        borderColor: colors.white,
        borderRadius: 25,
        borderWidth: 2,
        height: 50,
        width: 50,
      }}
      source={{
        uri: source,
      }}
    />
  );
};
