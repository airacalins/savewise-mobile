import React, { useEffect } from "react";

import { Caption } from "../../components/Typography";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { FlatList, View } from "react-native";
import { OffsetContainer } from "../../components/Container";
import { Screen } from "../../components/Screens/Screen";
import { Separator } from "../../components/Separator/Separator";
import { FundsStackParamList } from "../../navigation/FundStackNavigator";
import { Button } from "../../components/Buttons/Button";
import {
  SourceDetailsHistory,
  sourceDetailHistoryMockData,
} from "../../data/IncomeDetailsMockData";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { fetchFunds, fetchFundsByFundLabelId } from "../../store/funds/action";
import { Fund } from "../../store/funds/types";
import { format } from "date-fns";
import { LoadingScreen } from "../../components/Screens/LoadingScreen";

type FundStackProps = NativeStackScreenProps<
  FundsStackParamList,
  "FundDetails"
>;
export const FundDetailsScreen = ({ navigation, route }: FundStackProps) => {
  const { fundLabelId, fundLabelName } = route.params;
  const dispatch = useAppDispatch();
  const { isFetching, fundsPerLabel } = useAppSelector((state) => state.fund);

  useEffect(() => {
    navigation.setOptions({
      title: fundLabelName,
      headerRight: () => (
        <View style={{ paddingRight: 8 }}>
          <Button
            // onPress={() => navigation.navigate("AddIncome")}
            title="Add"
            disabled={false}
          />
        </View>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    dispatch(fetchFundsByFundLabelId(fundLabelId));
  }, [fundLabelId]);

  const renderItem = ({ item }: { item: Fund }) => (
    <View style={[defaultStyles.centerHorizontallyBetween, defaultStyles.p16]}>
      <Caption>{format(new Date(item.date), "MMMM d, yyyy")}</Caption>
      <Caption fontWeight="500">PHP {item.amount}</Caption>
    </View>
  );

  if (isFetching) return <LoadingScreen />;

  return (
    <Screen>
      <OffsetContainer>
        <FlatList
          data={fundsPerLabel}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          ItemSeparatorComponent={Separator}
          scrollEnabled={false}
        />
      </OffsetContainer>
    </Screen>
  );
};
