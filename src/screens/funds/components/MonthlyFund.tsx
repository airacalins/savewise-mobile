import React, { useMemo } from "react";
import moment from "moment";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Caption, Body } from "../../../components/Typography";
import { colors } from "../../../layouts/Colors";
import { defaultStyles } from "../../../layouts/DefaultStyles";
import { Fund } from "../../../store/funds/types";
import { HorizontalSpace, VerticalSpace } from "../../../components/Spacer";
import { ListTile } from "../../../components/ListTile";
import { FundsStackParamList } from "../../../navigation/FundStackNavigator";
import { useAppDispatch } from "../../../store/hooks";
import { deleteFund, fetchFunds } from "../../../store/funds/action";

interface MonthlyFundProps {
  year: string;
  funds: Fund[];
}

export const MonthlyFund: React.FC<MonthlyFundProps> = ({ year, funds }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<FundsStackParamList>>();
  const dispatch = useAppDispatch();

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

  const handleDelete = async (id: string) => {
    await dispatch(deleteFund(id));
    await dispatch(fetchFunds());
  };

  const handleNavigateToFundDetails = (id: string) => {
    navigation.navigate("FundDetails", { id });
  };

  const fundsByMonth = useMemo(() => groupByMonth(funds), [funds]);

  let swipeableRef: Array<Swipeable | undefined | null> = [];
  let previousSwipeableRef: Swipeable | undefined | null;

  const onClose = (index: number) => {
    if (previousSwipeableRef && previousSwipeableRef !== swipeableRef[index]) {
      previousSwipeableRef.close();
    }
    previousSwipeableRef = swipeableRef[index];
  };

  const months = useMemo(
    () => Object.getOwnPropertyNames(fundsByMonth).reverse(),
    [fundsByMonth]
  );

  return months.map((month) => (
    <View key={`${year}${month}`}>
      <Text>{`${getMonthName(+month)} ${year}`}</Text>
      {fundsByMonth[month].map((fund: Fund, index: number) => {
        const { id, title, date, amount } = fund;

        console.log(index);

        return (
          <Swipeable
            key={id}
            ref={(ref) => (swipeableRef[index] = ref)}
            onSwipeableWillOpen={() => onClose(index)}
            renderRightActions={() => (
              <View style={[defaultStyles.center, styles.rightSwipeAction]}>
                <TouchableOpacity
                  onPress={() => handleDelete(id)}
                  style={defaultStyles.centerAlignHorizontally}
                >
                  <Feather name="trash" size={16} color={colors.white} />
                  <HorizontalSpace spacer={8} />
                  <Body style={defaultStyles.textWhite}>Delete</Body>
                </TouchableOpacity>
              </View>
            )}
          >
            <ListTile
              onPress={() => handleNavigateToFundDetails(id)}
              LeadingComponent={
                <View style={styles.dateContainer}>
                  <Body>{moment(date).format("MMM")}</Body>
                  <Body>{moment(date).format("DD")}</Body>
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
                  <Body>{title}</Body>
                </View>
              }
              SubtitleComponent={
                <Caption>
                  {amount > 0
                    ? `You added ${amount.toLocaleString()} to your fund`
                    : `You deducted ${Math.abs(
                        amount
                      ).toLocaleString()} from your fund`}
                </Caption>
              }
              TrailingComponent={
                <Body color={amount < 0 ? colors.danger : colors.success}>
                  {Math.abs(amount).toLocaleString()}
                </Body>
              }
              verticalPadding={8}
            />
          </Swipeable>
        );
      })}
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
