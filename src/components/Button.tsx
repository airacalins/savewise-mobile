import React from "react";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";

import { Caption, Subtitle } from "./Typography";
import { colors } from "../layouts/Colors";
import { defaultStyles } from "../layouts/DefaultStyles";
import { HorizontalSpace } from "./Spacer";
import { OffsetContainer } from "./Container";

interface IconButtonProps extends TouchableOpacityProps {
  size?: "S" | "M";
  title?: string;
  IconComponent: React.ReactNode;
}

export const IconButton: React.FC<IconButtonProps> = ({
  size,
  title,
  IconComponent,
  ...props
}) => {
  const buttonSize = () => {
    switch (size) {
      case "S":
        return 8;
      case "M":
        return 16;
      default:
        return 16;
    }
  };

  return (
    <TouchableOpacity {...props}>
      <OffsetContainer padding={buttonSize()}>
        <View style={defaultStyles.centerHorizontally}>
          {IconComponent}
          {title && (
            <>
              <HorizontalSpace spacer={8} />
              <Subtitle>{title}</Subtitle>
            </>
          )}
        </View>
      </OffsetContainer>
    </TouchableOpacity>
  );
};

interface CustomButtonProps extends TouchableOpacityProps {
  size?: "S" | "M";
  title: string;
  isValid: boolean;
  bgColor?: "dark" | "danger";
  isFullWidth?: boolean;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  size,
  title,
  isValid,
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
          paddingVertical: 4,
        };
      case "M":
        return {
          padding: 16,
        };
      default:
        return {
          paddingHorizontal: 8,
          paddingVertical: 4,
        };
    }
  };

  return (
    <TouchableOpacity {...props}>
      <OffsetContainer backgroundColor={buttonBgColor()}>
        <View style={{ alignSelf: "center" }}>
          <Caption
            style={{
              ...buttonTitle(),
              color: !isValid ? colors.grey : buttonTextColor(),
            }}
          >
            {title}
          </Caption>
        </View>
      </OffsetContainer>
    </TouchableOpacity>
  );
};
