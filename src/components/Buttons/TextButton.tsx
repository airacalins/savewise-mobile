import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { Body } from "../Typography";
import { colors } from "../../layouts/Colors";
import { defaultStyles } from "../../layouts/DefaultStyles";

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
