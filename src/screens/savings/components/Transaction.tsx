import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Body, Caption } from "../../../components/Typography";
import { colors } from "../../../layouts/Colors";
import { defaultStyles } from "../../../layouts/DefaultStyles";
import { HorizontalSpace, VerticalSpace } from "../../../components/Spacer";

interface TransactionProps {
  month: string;
  date: string;
  description: string;
  amount: number;
}

export const Transaction: React.FC = () => {
  return (
    <View style={defaultStyles.centerHorizontally}>
      <View style={styles.dateContainer}>
        <Body>Dec</Body>
        <Body>31</Body>
      </View>

      <MaterialCommunityIcons
        name="file-image-outline"
        size={32}
        color={colors.dark}
      />

      <HorizontalSpace spacer={4} />

      <View style={[defaultStyles.centerHorizontallyBetween, { flex: 1 }]}>
        <View>
          <Body>Salary</Body>
          <VerticalSpace spacer={4} />
          <Body style={{ fontSize: 12, color: colors.dark }}>
            You added P2,300 for the Car
          </Body>
        </View>
        <Caption style={{ color: colors.success }}>2,300</Caption>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dateContainer: {
    width: 48,
  },
});
