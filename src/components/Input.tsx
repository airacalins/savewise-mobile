import React from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { Body, Caption } from "./Typography";
import { colors } from "../layouts/Colors";
import { HorizontalSpace } from "./Spacer";
import { OffsetContainer } from "./Container";
import { defaultStyles } from "../layouts/DefaultStyles";

interface InputProps extends TextInputProps {
  label?: string;
  Icon: React.ReactNode;
  TrailingIcon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  Icon,
  TrailingIcon,
  ...props
}) => {
  return (
    <View style={styles.root}>
      {label && <Body style={styles.label}>{label}</Body>}
      <OffsetContainer>
        <View style={defaultStyles.centerHorizontally}>
          <View style={styles.icon}>{Icon}</View>
          <HorizontalSpace spacer={4} />
          <View style={[defaultStyles.centerAlignHorizontally, { flex: 1 }]}>
            <TextInput style={styles.input} {...props} />
            <View style={defaultStyles.horizontalPadding}>{TrailingIcon}</View>
          </View>
        </View>
      </OffsetContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingBottom: 24,
  },
  label: {
    paddingHorizontal: 8,
  },
  icon: {
    alignItems: "center",
    borderBottomLeftRadius: 8,
    borderColor: colors.border,
    borderTopLeftRadius: 8,
    borderWidth: 1,
    height: 50,
    justifyContent: "center",
    width: 50,
  },
  input: {
    height: 50,
    padding: 10,
    flex: 1,
  },
});
