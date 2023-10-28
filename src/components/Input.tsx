import React from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

import { Body } from "./Typography";
import { colors } from "../layouts/Colors";
import { HorizontalSpace } from "./Spacer";
import { OffsetContainer } from "./Container";
import { defaultStyles } from "../layouts/DefaultStyles";

interface TextFieldProps extends TextInputProps {
  label: string;
  Icon: React.ReactNode;
}

export const TextField: React.FC<TextFieldProps> = ({
  label,
  Icon,
  ...props
}) => {
  return (
    <View style={styles.root}>
      <Body style={styles.label}>{label}</Body>
      <OffsetContainer>
        <View style={defaultStyles.centerHorizontally}>
          <View style={styles.icon}>{Icon}</View>
          <HorizontalSpace spacer={4} />
          <TextInput style={styles.input} {...props} />
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
    paddingHorizontal: 16,
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
    width: "100%",
  },
});
