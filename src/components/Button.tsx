import React from "react";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";

import { defaultStyles } from "../layouts/DefaultStyles";
import { OffsetContainer } from "./Container";
import { HorizontalSpace } from "./Spacer";
import { Caption, Subtitle } from "./Typography";
import { StyleSheet } from "react-native";

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
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  size,
  title,
  ...props
}) => {
  const buttonSize = () => {
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
      <OffsetContainer>
        <View style={{ alignSelf: "center" }}>
          <Caption style={{ ...buttonSize() }}>{title}</Caption>
        </View>
      </OffsetContainer>
    </TouchableOpacity>
  );
};
