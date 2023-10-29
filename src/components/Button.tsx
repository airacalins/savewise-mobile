import React from "react";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";

import { defaultStyles } from "../layouts/DefaultStyles";
import { OffsetContainer } from "./Container";
import { HorizontalSpace } from "./Spacer";
import { Caption, Subtitle } from "./Typography";
import { StyleSheet } from "react-native";

interface IconButtonProps extends TouchableOpacityProps {
  title: string;
  IconComponent: React.ReactNode;
}

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  title,
  IconComponent,
  ...props
}) => {
  return (
    <TouchableOpacity {...props}>
      <OffsetContainer padding={16}>
        <View style={defaultStyles.centerHorizontally}>
          {IconComponent}
          <HorizontalSpace spacer={8} />
          <Subtitle>{title}</Subtitle>
        </View>
      </OffsetContainer>
    </TouchableOpacity>
  );
};

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
