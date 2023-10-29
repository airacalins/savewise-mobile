import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Caption, Body } from "../../../components/Typography";
import { colors } from "../../../layouts/Colors";
import { defaultStyles } from "../../../layouts/DefaultStyles";
import { VerticalSpace, HorizontalSpace } from "../../../components/Spacer";
import { Transaction } from "./Transaction";

interface MonthlyTransactionsProps {
  date: string;
  description: string;
  amount: number;
}

export const MonthlyTransactions: React.FC = () => {
  return (
    <>
      <Caption style={defaultStyles.fontWeight500}>December 2023</Caption>

      <VerticalSpace spacer={16} />

      <Transaction />

      <VerticalSpace spacer={32} />
    </>
  );
};

const styles = StyleSheet.create({
  dateContainer: {
    width: 48,
  },
});
