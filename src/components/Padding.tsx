import React, { Children } from "react";
import { View } from "react-native";

interface PaddingProps {
  p: number;
  px?: number;
  py?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  children: React.ReactNode;
}

export const Padding: React.FC<PaddingProps> = ({
  p,
  px,
  py,
  pt,
  pb,
  pl,
  pr,
  children,
}) => {
  return (
    <View
      style={{
        padding: p,
        paddingHorizontal: px,
        paddingVertical: py,
        paddingTop: pt,
        paddingBottom: pb,
        paddingLeft: pl,
        paddingRight: pr,
      }}
    >
      {children}
    </View>
  );
};
