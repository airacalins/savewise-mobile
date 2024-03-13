import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { Body } from "../Typography";
import { colors } from "../../layouts/Colors";

interface TextButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
}

export const TextButton: React.FC<TextButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Body color={colors.success} uppercase fontWeight="500">
        {title}
      </Body>
    </TouchableOpacity>
  );
};
