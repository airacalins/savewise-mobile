import React from "react";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";

import { defaultStyles } from "../layouts/DefaultStyles";
import { HorizontalSpace } from "./Spacer";
import { Caption, Subtitle } from "./Typography";
import { OffsetContainer } from "./Container";
import { colors } from "../layouts/Colors";

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
  bgColor?: "dark";
  isFullWidth?: boolean;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  size,
  title,
  bgColor,
  isFullWidth,
  ...props
}) => {
  const buttonBgColor = () => {
    switch (bgColor) {
      case "dark":
        return colors.dark;
      default:
        return colors.background;
    }
  };

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
              color: bgColor === "dark" ? colors.white : colors.dark,
            }}
          >
            {title}
          </Caption>
        </View>
      </OffsetContainer>
    </TouchableOpacity>
  );
};
