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
        borderRadius: 4,
        height: 50,
        width: 50,
      }}
      source={{
        uri: source,
      }}
    />
  );
};
