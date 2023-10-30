import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { Caption, Body } from "../../../components/Typography";
import { colors } from "../../../layouts/Colors";
import { defaultStyles } from "../../../layouts/DefaultStyles";
import { FundsStackParamList } from "../../../navigation/types";
import { ListTile } from "../../../components/ListTile";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { VerticalSpace, HorizontalSpace } from "../../../components/Spacer";

interface MonthlyTransactionsProps {
  date: string;
  description: string;
  amount: number;
}

export const MonthlyTransactions: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<FundsStackParamList>>();

  return (
    <>
      <Caption style={defaultStyles.fontWeight500}>December 2023</Caption>

      <VerticalSpace spacer={16} />

      <ListTile
        LeadingComponent={
          <View style={styles.dateContainer}>
            <Body>Dec</Body>
            <Body>31</Body>
          </View>
        }
        IconComponent={
          <MaterialCommunityIcons
            name="file-image-outline"
            size={32}
            color={colors.dark}
          />
        }
        TitleComponent={<Body>Salary</Body>}
        SubtitleComponent={
          <Body style={{ fontSize: 12, color: colors.dark }}>
            You added P2,300 for the Car
          </Body>
        }
        TrailingComponent={
          <Caption style={{ color: colors.success }}>2,300</Caption>
        }
        onPress={() => navigation.navigate("FundDetailsStackNavigator")}
      />

      <VerticalSpace spacer={32} />
    </>
  );
};

const styles = StyleSheet.create({
  dateContainer: {
    width: 48,
  },
});
