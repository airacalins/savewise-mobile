import React from "react";
import { StyleSheet, View } from "react-native";

import { Body } from "../Typography";
import { colors } from "../../layouts/Colors";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { HorizontalSpace } from "../Spacer";

interface ListTitleProps {
  title: string;
}

export const ListTitle: React.FC<ListTitleProps> = ({ title }) => {
  return (
    <View style={defaultStyles.centerHorizontally}>
      <View style={styles.dot} />
      <HorizontalSpace spacer={8} />
      <Body uppercase>{title}</Body>
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    width: 12,
    height: 12,
    backgroundColor: colors.warning,
    borderRadius: 6,
  },
});
