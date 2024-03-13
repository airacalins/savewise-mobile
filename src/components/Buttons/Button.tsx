import React from "react";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";

import { Caption } from "../Typography";
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
    switch (bgColor) {
      case "dark":
        return colors.dark;
      case "danger":
        return colors.danger;
      case "success":
        return colors.success;
      default:
        return colors.background;
    }
  };

  const buttonTextColor = () => (!!bgColor ? colors.white : colors.dark);

  const buttonTitle = () => {
    switch (size) {
      case "S":
        return {
          paddingHorizontal: 8,
          paddingVertical: 6,
        };
      case "M":
        return {
          padding: 16,
        };
      default:
        return {
          paddingHorizontal: 8,
          paddingVertical: 6,
        };
    }
  };

  return (
    <TouchableOpacity {...props}>
      <OffsetContainer backgroundColor={buttonBgColor()}>
        <View style={{ alignSelf: "center" }}>
          <Caption
            fontWeight="400"
            style={{
              ...buttonTitle(),
              color: !isValid ? colors.grey : buttonTextColor(),
              textTransform: uppercase ? "uppercase" : "none",
            }}
          >
            {title}
          </Caption>
        </View>
      </OffsetContainer>
    </TouchableOpacity>
  );
};
