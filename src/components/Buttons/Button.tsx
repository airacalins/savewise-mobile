import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

import { Body, Caption, Label } from "../Typography";
import { colors } from "../../layouts/Colors";
import { OffsetContainer } from "../Container";

interface ButtonProps extends TouchableOpacityProps {
  size?: "S" | "M";
  title: string;
  uppercase?: boolean;
  isValid: boolean;
  bgColor?: "dark" | "danger" | "success";
  isFullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  size,
  title,
  uppercase,
  isValid = false,
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

    return !isValid ? colors.grey : colorMap[bgColor ?? "default"];
  };

  const buttonTextColor = () => {
    if (!isValid) {
      return colors.background;
    }
    if (!bgColor) {
      return colors.dark;
    }
    return colors.white;
  };

  const buttonTitleStyles = () =>
    size === "M" ? styles.mediumButtonContainer : styles.smallButtonContainer;

  const buttonText = () => {
    const TextComponent = size === "M" ? Body : Label;

    return (
      <TextComponent
        color={buttonTextColor()}
        fontWeight={size === "M" ? "500" : "400"}
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
