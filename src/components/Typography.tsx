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
  children: React.ReactNode;
  color?: string;
  style?: StyleProp<TextStyle>;
}

export const Header: React.FC<TypographyProps> = ({
  children,
  color = colors.dark,
  style,
  ...props
}) => (
  <Text style={[styles.header, { color }, style]} {...props}>
    {children}
  </Text>
);

export const Title: React.FC<TypographyProps> = ({
  children,
  color = colors.dark,
  style,
  ...props
}) => (
  <Text style={[styles.title, { color }, style]} {...props}>
    {children}
  </Text>
);

export const Subtitle: React.FC<TypographyProps> = ({
  children,
  color = colors.dark,
  style,
  ...props
}) => (
  <Text style={[styles.subtitle, { color }, style]} {...props}>
    {children}
  </Text>
);

export const Body: React.FC<TypographyProps> = ({
  children,
  color = colors.dark,
  style,
  ...props
}) => (
  <Text style={[styles.body, { color }, style]} {...props}>
    {children}
  </Text>
);

export const Caption: React.FC<TypographyProps> = ({
  children,
  color = colors.dark,
  style,
  ...props
}) => (
  <Text style={[styles.caption, { color }, style]} {...props}>
    {children}
  </Text>
);

export const Label: React.FC<TypographyProps> = ({
  children,
  color = colors.dark,
  style,
  ...props
}) => (
  <Text style={[style, styles.label, { color }, style]} {...props}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  header: {
    color: colors.dark,
    fontSize: 32,
    fontWeight: "500",
  },
  title: {
    color: colors.dark,
    fontWeight: "500",
    fontSize: 20,
  },
  subtitle: {
    color: colors.dark,
    fontWeight: "500",
    fontSize: 16,
  },
  body: {
    color: colors.dark,
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.5,
  },
  caption: {
    color: colors.dark,
    fontSize: 11,
    fontWeight: "400",
    letterSpacing: 0.5,
  },
  label: {
    color: colors.dark,
    fontSize: 11,
    fontWeight: "400",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
});
