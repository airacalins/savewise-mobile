import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

import { Body, Caption, Subtitle } from "../Typography";
import { colors } from "../../layouts/Colors";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { Padding } from "../Padding";

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
      <Padding py={16}>
        <Padding pl={16} pr={8}>
          <View style={defaultStyles.centerHorizontallyBetween}>
            <Subtitle>{title}</Subtitle>
            {HeaderRightComponent}
          </View>
        </Padding>

        {title && <View style={defaultStyles.listTileSeparator} />}

        <View style={styles.screen}>{children}</View>
      </Padding>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  screen: {
    paddingVertical: 8,
  },
  lottie: {
    width: "auto",
    height: "75%",
  },
});
