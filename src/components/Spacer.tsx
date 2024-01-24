import React from "react";
import { View } from "react-native";

interface SpacerProps {
  spacer: number;
}

export const HorizontalSpace: React.FC<SpacerProps> = ({ spacer }) => (
  <View style={{ width: spacer }} />
);

export const VerticalSpace: React.FC<SpacerProps> = ({ spacer }) => (
  <View style={{ height: spacer }} />
);
