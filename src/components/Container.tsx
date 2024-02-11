import React from "react";
import { StyleSheet, View } from "react-native";

import { colors } from "../layouts/Colors";

interface OffsetContainerProps {
  children: React.ReactNode;
  padding?: number;
  backgroundColor?: string;
}

export const OffsetContainer: React.FC<OffsetContainerProps> = ({
  children,
  padding,
  backgroundColor,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.offsetBorder} />
      <View
        style={[
          styles.offset,
          { padding, backgroundColor: backgroundColor ?? colors.background },
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
  offset: {
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    shadowColor: colors.grey,
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    width: "100%",
  },
  offsetBorder: {
    backgroundColor: colors.background,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    shadowColor: colors.white,
    shadowOffset: { width: -4, height: -4 },
    shadowOpacity: 1,
    shadowRadius: 8,
    width: "100%",
    height: "100%",
    position: "absolute",
    left: 8,
    top: 8,
  },
});
