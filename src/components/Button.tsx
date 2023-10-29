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
  title: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  ...props
}) => (
  <TouchableOpacity {...props}>
    <OffsetContainer>
      <Caption style={styles.customButtonText}>{title}</Caption>
    </OffsetContainer>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  customButtonText: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});
