import React from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

import { Body } from "./Typography";
import { colors } from "../layouts/Colors";
import { defaultStyles } from "../layouts/DefaultStyles";
import { HorizontalSpace } from "./Spacer";
import { OffsetContainer } from "./Container";

interface InputProps extends TextInputProps {
  label?: string;
  Icon?: React.ReactNode;
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
          {Icon && (
            <>
              <View style={styles.icon}>{Icon}</View>
              <HorizontalSpace spacer={4} />
            </>
          )}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              autoFocus
              returnKeyType="next"
              {...props}
            />
            {TrailingIcon && (
              <View style={defaultStyles.horizontalPadding}>
                {TrailingIcon}
              </View>
            )}
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
  inputContainer: {
    ...defaultStyles.centerAlignHorizontally,
    flex: 1,
  },
  input: {
    height: 50,
    padding: 10,
    flex: 1,
  },
});
