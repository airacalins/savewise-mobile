import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../layouts/Colors";

const fontSize = {
  header: 32,
  title: 28,
  subtitle: 18,
  body: 13,
  caption: 11,
};

interface TypographyProps {
  children: React.ReactNode;
  color?: string;
}

export const Header: React.FC<TypographyProps> = ({ children: content }) => (
  <Text style={styles.header}>{content}</Text>
);

export const Title: React.FC<TypographyProps> = ({ children: content }) => (
  <Text style={styles.title}>{content}</Text>
);

export const Subtitle: React.FC<TypographyProps> = ({ children: content }) => (
  <Text style={styles.subtitle}>{content}</Text>
);

export const Body: React.FC<TypographyProps> = ({ children: content }) => (
  <Text style={styles.body}>{content}</Text>
);

export const Caption: React.FC<TypographyProps> = ({ children: content }) => (
  <Text style={styles.caption}>{content}</Text>
);

const styles = StyleSheet.create({
  header: {
    color: colors.white90,
    fontSize: fontSize.header,
    fontWeight: "700",
  },
  title: {
    color: colors.white90,
    fontWeight: "500",
    fontSize: fontSize.title,
  },
  subtitle: {
    color: colors.white90,
    fontWeight: "500",
    fontSize: fontSize.subtitle,
  },
  body: {
    color: colors.white70,
    fontSize: fontSize.body,
    fontWeight: "400",
    letterSpacing: 0.5,
  },
  caption: {
    color: colors.white70,
    fontSize: fontSize.caption,
    fontWeight: "400",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
});
