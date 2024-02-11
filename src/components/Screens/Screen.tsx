import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";

import { colors } from "../../layouts/Colors";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { Subtitle } from "../Typography";

interface ScreenProps {
  title?: string;
  children: React.ReactNode;
  HeaderRightComponent?: React.ReactNode;
}

export const Screen: React.FC<ScreenProps> = ({
  title,
  children,
  HeaderRightComponent,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {title && (
        <>
          <View style={styles.headerContainer}>
            <Subtitle>{title}</Subtitle>
            {HeaderRightComponent}
          </View>
          <View style={defaultStyles.listTileSeparator} />
        </>
      )}
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headerContainer: {
    padding: 16,
    paddingRight: 8,
    ...defaultStyles.centerHorizontallyBetween,
  },
  content: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});
