import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

import { Body, Label } from "../Typography";
import { colors } from "../../layouts/Colors";
import { OffsetContainer } from "../Container";

export enum ButtonSize {
  Small = "S",
  Medium = "M",
}

interface ButtonProps extends TouchableOpacityProps {
  size?: ButtonSize;
  title: string;
  uppercase?: boolean;
  bgColor?: "dark" | "danger" | "success";
  isFullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  size,
  title,
  uppercase,
  bgColor,
  isFullWidth,
  ...props
}) => {
  const buttonBgColor = () => {
    const colorMap = {
      dark: colors.dark,
      danger: colors.danger,
      success: colors.success,
      default: colors.background,
    };
    return props.disabled ? colors.grey : colorMap[bgColor ?? "default"];
  };

  const buttonTitleStyles = () =>
    size === ButtonSize.Medium
      ? styles.mediumButtonContainer
      : styles.smallButtonContainer;

  const buttonText = () => {
    const TextComponent = size === ButtonSize.Medium ? Body : Label;

    return (
      <TextComponent
        color={!bgColor ? colors.dark : colors.white}
        fontWeight={size === ButtonSize.Medium ? "500" : "400"}
        style={{
          ...buttonTitleStyles(),
          textTransform: uppercase ? "uppercase" : "none",
        }}
      >
        {title}
      </TextComponent>
    );
  };

  return (
    <TouchableOpacity {...props}>
      <OffsetContainer backgroundColor={buttonBgColor()}>
        <View style={{ alignSelf: "center" }}>{buttonText()}</View>
      </OffsetContainer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  smallButtonContainer: {
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  mediumButtonContainer: {
    padding: 16,
  },
});
