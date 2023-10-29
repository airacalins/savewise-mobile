import React from "react";
import { StyleSheet, View } from "react-native";

import { Caption, Body } from "./Typography";
import { defaultStyles } from "../layouts/DefaultStyles";
import { OffsetContainer } from "./Container";
import { VerticalSpace } from "./Spacer";

interface DetailsProps {
  title: string;
  details: string;
  IconComponent: React.ReactNode;
}

export const Details: React.FC<DetailsProps> = ({
  title,
  details,
  IconComponent,
}) => {
  return (
    <OffsetContainer padding={16}>
      <View style={[defaultStyles.row]}>
        <View style={styles.icon}>{IconComponent}</View>
        <View style={styles.textsContainer}>
          <Caption>{title}</Caption>
          <VerticalSpace spacer={8} />
          <Body>{details}</Body>
        </View>
      </View>
    </OffsetContainer>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 48,
    height: 32,
  },
  textsContainer: {
    flex: 1,
  },
});
