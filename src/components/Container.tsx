import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

import { colors } from "../layouts/Colors";

interface OffsetContainerProps {
  children: React.ReactNode;
  padding?: number;
  backgroundColor?: string;
  borderColor?: string;
  style?: StyleProp<ViewStyle>;
}

export const OffsetContainer: React.FC<OffsetContainerProps> = ({
  children,
  padding,
  backgroundColor,
  borderColor = colors.border,
  style,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.offsetBorder} />
      <View
        style={[
          {
            padding,
            backgroundColor: backgroundColor ?? colors.background,
            borderColor,
          },
          styles.offset,
          style,
        ]}
      >
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  offsetBorder: {
    backgroundColor: colors.background,
    borderRadius: 8,
    shadowColor: colors.white,
    shadowOffset: { width: -2, height: -2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    width: "100%",
    height: "100%",
    position: "absolute",
    left: 8,
    top: 8,
  },
  offset: {
    borderRadius: 8,
    borderWidth: 1,
    shadowColor: colors.grey,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.75,
    shadowRadius: 8,
    width: "100%",
  },
});
