import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
} from "react-native";

import { colors } from "../layouts/Colors";

interface TypographyProps extends TextProps {
  text: string;
  color?: string;
  fontWeight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | undefined;
  uppercase?: boolean;
  style?: StyleProp<TextStyle>;
}

export const Header: React.FC<TypographyProps> = ({
  text,
  color = colors.dark,
  fontWeight = "500",
  uppercase,
  style,
}) => (
  <Text
    style={[
      styles.header,
      {
        color,
        textTransform: uppercase ? "uppercase" : "none",
        fontWeight,
      },
      style,
    ]}
  >
    {text}
  </Text>
);

export const Title: React.FC<TypographyProps> = ({
  text,
  color = colors.dark,
  fontWeight = "500",
  uppercase,
  style,
  ...props
}) => (
  <Text
    style={[
      styles.title,
      {
        color,
        textTransform: uppercase ? "uppercase" : "none",
        fontWeight: fontWeight,
      },
      style,
    ]}
    {...props}
  >
    {text}
  </Text>
);

export const Subtitle: React.FC<TypographyProps> = ({
  text,
  color = colors.dark,
  fontWeight = "500",
  uppercase,
  style,
  ...props
}) => (
  <Text
    style={[
      styles.subtitle,
      {
        color,
        textTransform: uppercase ? "uppercase" : "none",
        fontWeight: fontWeight,
      },
      style,
    ]}
    {...props}
  >
    {text}
  </Text>
);

export const Body: React.FC<TypographyProps> = ({
  text,
  color = colors.dark,
  fontWeight = "300",
  uppercase,
  style,
  ...props
}) => (
  <Text
    style={[
      styles.body,
      {
        color,
        textTransform: uppercase ? "uppercase" : "none",
        fontWeight: fontWeight,
      },
      style,
    ]}
    {...props}
  >
    {text}
  </Text>
);

export const Caption: React.FC<TypographyProps> = ({
  text,
  color = colors.dark,
  fontWeight = "300",
  uppercase,
  style,
  ...props
}) => (
  <Text
    style={[
      styles.caption,
      {
        color,
        textTransform: uppercase ? "uppercase" : "none",
        fontWeight: fontWeight,
      },
      style,
    ]}
    {...props}
  >
    {text}
  </Text>
);

export const Label: React.FC<TypographyProps> = ({
  text,
  color = colors.dark,
  fontWeight = "300",
  uppercase,
  style,
  ...props
}) => (
  <Text
    style={[
      style,
      styles.label,
      {
        color,
        textTransform: uppercase ? "uppercase" : "none",
        fontWeight: fontWeight,
      },
      style,
    ]}
    {...props}
  >
    {text}
  </Text>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
  },
  title: {
    fontSize: 20,
  },
  subtitle: {
    fontSize: 16,
  },
  body: {
    fontSize: 14,
    letterSpacing: 0.5,
  },
  caption: {
    fontSize: 13,
    letterSpacing: 0.5,
  },
  label: {
    fontSize: 12,
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
});
