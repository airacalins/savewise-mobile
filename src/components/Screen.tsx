import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { defaultStyles } from "../layouts/DefaultStyles";
import { SafeAreaView } from "react-native";
import { colors } from "../layouts/Colors";

interface GradientScreenProps {
  content: React.ReactNode;
}

export const GradientScreen: React.FC<GradientScreenProps> = ({ content }) => {
  return (
    <LinearGradient
      style={[defaultStyles.gradientScreen]}
      colors={colors.gradientScreen}
      start={{ x: 0, y: 0 }}
    >
      <SafeAreaView style={defaultStyles.screen}>{content}</SafeAreaView>
    </LinearGradient>
  );
};
