import React from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Feather } from "@expo/vector-icons";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { Caption, Body } from "../../../components/Typography";
import { colors } from "../../../layouts/Colors";
import { defaultStyles } from "../../../layouts/DefaultStyles";
import { FundsStackParamList } from "../../../navigation/FundStackNavigator";
import { ListTile } from "../../../components/ListTile";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { VerticalSpace, HorizontalSpace } from "../../../components/Spacer";
import { Fund } from "../../../store/funds/fund";

type MonthlyTransactionsProps = {
  monthlyTransactions: Fund[];
};

export const MonthlyTransactions: React.FC<MonthlyTransactionsProps> = ({
  monthlyTransactions,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<FundsStackParamList>>();

  const handleDelete = () => {
    navigation.navigate("Funds");
  };

  return (
    <>
      <Caption style={defaultStyles.fontWeight500}>December 2023</Caption>

      <VerticalSpace spacer={16} />

      <FlatList
        data={monthlyTransactions}
        ItemSeparatorComponent={() => (
          <View style={defaultStyles.listTileSeparator} />
        )}
        renderItem={({ item }) => (
          <Swipeable
            renderRightActions={() => (
              <View style={[defaultStyles.center, styles.rightSwipeAction]}>
                <TouchableOpacity
                  onPress={handleDelete}
                  style={defaultStyles.row}
                >
                  <Feather name="trash" size={16} color={colors.white} />
                  <HorizontalSpace spacer={8} />
                  <Caption style={defaultStyles.textWhite}>Delete</Caption>
                </TouchableOpacity>
              </View>
            )}
          >
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
              TitleComponent={<Body>{item.title}</Body>}
              SubtitleComponent={
                <Body style={[defaultStyles.textDark, { fontSize: 12 }]}>
                  {item.amount > 0
                    ? `You added ${item.amount} to your fund`
                    : `Test`}
                </Body>
              }
              TrailingComponent={
                <Caption style={defaultStyles.textSuccess}>
                  {item.amount}
                </Caption>
              }
              verticalPadding={8}
              onPress={() => {}}
            />
          </Swipeable>
        )}
      />
      <VerticalSpace spacer={32} />
    </>
  );
};

const styles = StyleSheet.create({
  rightSwipeAction: {
    height: "100%",
    width: "25%",
    backgroundColor: colors.danger,
    marginLeft: 16,
  },
  dateContainer: {
    width: 48,
  },
});
