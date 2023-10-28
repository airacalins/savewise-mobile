import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Caption, Body } from "../../../components/Typography";
import { colors } from "../../../layouts/Colors";
import { defaultStyles } from "../../../layouts/DefaultStyles";
import { VerticalSpace, HorizontalSpace } from "../../../components/Spacer";

interface TransactionProps {
  date: string;
  description: string;
  amount: number;
}

export const Transaction: React.FC = () => {
  return (
    <>
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

        <View style={defaultStyles.centerHorizontallyBetween}>
          <View>
            <Body>Salary</Body>
            <VerticalSpace spacer={4} />
            <Caption>You add P2,300</Caption>
          </View>
          <Caption style={{ color: colors.success }}>2,300</Caption>
        </View>
      </View>

      <VerticalSpace spacer={32} />
    </>
  );
};

const styles = StyleSheet.create({
  dateContainer: {
    width: 48,
  },
});
