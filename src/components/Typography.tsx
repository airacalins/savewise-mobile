import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../layouts/Colors";

const fontSize = {
  header: 32,
  title: 20,
  subtitle: 16,
  body: 13,
  caption: 11,
};

interface TypographyProps {
  children: React.ReactNode;
  color?: string;
  sx?: any;
}

export const Header: React.FC<TypographyProps> = ({ children, sx }) => (
  <Text style={[styles.header, sx]}>{children}</Text>
);

export const Title: React.FC<TypographyProps> = ({ children, sx }) => (
  <Text style={[styles.title, sx]}>{children}</Text>
);

export const Subtitle: React.FC<TypographyProps> = ({ children, sx }) => (
  <Text style={[styles.subtitle, sx]}>{children}</Text>
);

export const Body: React.FC<TypographyProps> = ({ children, sx }) => (
  <Text style={[styles.body, sx]}>{children}</Text>
);

export const Caption: React.FC<TypographyProps> = ({ children, sx }) => (
  <Text style={[styles.caption, sx]}>{children}</Text>
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
