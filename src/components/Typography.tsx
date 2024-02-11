import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";

import { colors } from "../layouts/Colors";

const fontSize = {
  header: 32,
  title: 20,
  subtitle: 16,
  body: 14,
  caption: 11,
};

interface TypographyProps extends TextProps {
  children: React.ReactNode;
}

export const Header: React.FC<TypographyProps> = ({ children, ...props }) => (
  <Text style={[styles.header]} {...props}>
    {children}
  </Text>
);

export const Title: React.FC<TypographyProps> = ({ children, ...props }) => (
  <Text style={[styles.title]} {...props}>
    {children}
  </Text>
);

export const Subtitle: React.FC<TypographyProps> = ({ children, ...props }) => (
  <Text style={[styles.subtitle]} {...props}>
    {children}
  </Text>
);

export const Body: React.FC<TypographyProps> = ({ children, ...props }) => (
  <Text style={[styles.body]} {...props}>
    {children}
  </Text>
);

export const Caption: React.FC<TypographyProps> = ({ children, ...props }) => (
  <Text style={[styles.caption]} {...props}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  header: {
    color: colors.dark,
    fontSize: fontSize.header,
    fontWeight: "500",
  },
  title: {
    color: colors.dark,
    fontWeight: "500",
    fontSize: fontSize.title,
  },
  subtitle: {
    color: colors.dark,
    fontWeight: "500",
    fontSize: fontSize.subtitle,
  },
  body: {
    color: colors.dark,
    fontSize: fontSize.body,
    fontWeight: "400",
    letterSpacing: 0.5,
  },
  caption: {
    color: colors.dark,
    fontSize: fontSize.caption,
    fontWeight: "400",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
});
