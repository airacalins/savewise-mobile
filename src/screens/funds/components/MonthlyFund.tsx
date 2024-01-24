import React, { useMemo } from "react";
import { Text } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Caption, Body } from "../../../components/Typography";
import { colors } from "../../../layouts/Colors";
import { defaultStyles } from "../../../layouts/DefaultStyles";
import { ListTile } from "../../../components/ListTile";
import { HorizontalSpace, VerticalSpace } from "../../../components/Spacer";
import { Fund } from "../../../store/funds/types";
import moment from "moment";

interface MonthlyFundProps {
  year: string;
  funds: Fund[];
}

export const MonthlyFund: React.FC<MonthlyFundProps> = ({ year, funds }) => {
  const groupByMonth = (input: Fund[]) => {
    return input.reduce((item: any, currentValue: any) => {
      const date = new Date(currentValue.date);
      let key = date.getMonth();
      if (!item[key]) {
        item[key] = [];
      }
      item[key].push(currentValue);
      return item;
    }, {});
  };

  const getMonthName = (monthindex: number) => {
    const date = new Date();
    date.setMonth(monthindex);
    return date.toLocaleString([], { month: "long" });
  };

  const handleDelete = () => {
    // navigation.navigate("Funds");
  };

  const fundsByMonth = useMemo(() => groupByMonth(funds), [funds]);

  const months = useMemo(
    () => Object.getOwnPropertyNames(fundsByMonth).reverse(),
    [fundsByMonth]
  );

  return months.map((month) => (
    <View key={`${year}${month}`}>
      <Text>{`${getMonthName(+month)} ${year}`}</Text>
      {fundsByMonth[month].map((fund: Fund) => (
        <Swipeable
          key={fund.id}
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
                <Body>{moment(fund.date).format("MMM")}</Body>
                <Body>{moment(fund.date).format("DD")}</Body>
              </View>
            }
            IconComponent={
              <MaterialCommunityIcons
                name="file-image-outline"
                size={32}
                color={colors.dark}
              />
            }
            TitleComponent={
              <View>
                <Body>{fund.title}</Body>
              </View>
            }
            SubtitleComponent={
              <Body style={[defaultStyles.textDark, { fontSize: 12 }]}>
                {fund.amount > 0
                  ? `You added ${fund.amount.toLocaleString()} to your fund`
                  : `You deducted ${Math.abs(
                      fund.amount
                    ).toLocaleString()} to your fund`}
              </Body>
            }
            TrailingComponent={
              <Caption
                style={
                  fund.amount < 0
                    ? defaultStyles.textDanger
                    : defaultStyles.textSuccess
                }
              >
                {fund.amount.toLocaleString()}
              </Caption>
            }
            verticalPadding={8}
            onPress={() => {}}
          />
        </Swipeable>
      ))}
      <VerticalSpace spacer={16} />
    </View>
  ));
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
