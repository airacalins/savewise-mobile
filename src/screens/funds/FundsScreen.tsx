import React, { useEffect, useMemo, useRef } from "react";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { StyleSheet, View } from "react-native";

import { Button } from "../../components/Buttons/Button";
import { colors } from "../../layouts/Colors";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { fetchFunds } from "../../store/funds/action";
import { FundStackProps } from "../../navigation/FundStackNavigator";
import { Header, Subtitle } from "../../components/Typography";
import { IncomeSourcesActionBottomSheet } from "./components/IncomeSourcesActionBottomSheet";
import { LoadingScreen } from "../../components/Screens/LoadingScreen";
import { MonthlyDetailsCard } from "./components/MonthlyDetailsCard";
import { MoreActionBottomSheet } from "./components/MoreActionBottomSheet";
import { OffsetContainer } from "../../components/Container";
import { ScrollableScreen } from "../../components/Screens/ScrollableScreen";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { VerticalSpace } from "../../components/Spacer";

export interface IncomeSource {
  title: string;
  amount: number;
}

const incomeSourcesMockData: IncomeSource[] = [
  { title: "Salary", amount: 5000 },
  { title: "Freelancing", amount: 1500 },
  { title: "Investments", amount: 300 },
  { title: "Rental Income", amount: 700 },
];

const expensesMockData = [
  { title: "Groceries", amount: 50.25 },
  { title: "Gasoline", amount: 35.5 },
  { title: "Dinner with friends", amount: 75.8 },
  { title: "Utilities", amount: 120 },
  { title: "Entertainment", amount: 45 },
];

export const FundsScreen = ({ navigation }: FundStackProps) => {
  const dispatch = useAppDispatch();
  const { isFetching, funds } = useAppSelector((state) => state.fund);
  const moreActionsModalRef = useRef<BottomSheetModalMethods>(null);
  const incomeSourcesActionModalRef = useRef<BottomSheetModalMethods>(null);

  const totalFunds = useMemo(
    () => funds.reduce((accumulator, fund) => accumulator + fund.amount, 0),
    [funds]
  );

  const handlePresentMoreActionModal = () =>
    moreActionsModalRef.current?.present();

  const handleShowIncomeSourcesActionModal = () =>
    incomeSourcesActionModalRef.current?.present();

  const handleHideMoreActionModal = () =>
    moreActionsModalRef.current?.dismiss();

  const handleHideIncomeSourcesActionModalal = () =>
    incomeSourcesActionModalRef.current?.dismiss();

  const handleNavigateToIncomeSourcesScreen = () => {
    incomeSourcesActionModalRef.current?.dismiss();
    navigation.navigate("IncomeSources");
  };

  const handleNavigateToCashInScreen = () => {
    moreActionsModalRef.current?.dismiss();
    navigation.navigate("CashIn");
  };

  const handleNavigateToCashOutScreen = () => {
    moreActionsModalRef.current?.dismiss();
    navigation.navigate("CashOut");
  };

  const handleNavigateToIncomeSourceDetails = () => {
    navigation.navigate("IncomeSourceDetails");
  };

  useEffect(() => {
    dispatch(fetchFunds());
  }, []);

  if (isFetching) return <LoadingScreen />;

  return (
    <ScrollableScreen>
      <View style={defaultStyles.centerHorizontallyBetween}>
        <View style={defaultStyles.px8}>
          <Subtitle>Total Funds</Subtitle>
        </View>
        <Button
          title="Add / Manage"
          uppercase
          isValid={true}
          onPress={handlePresentMoreActionModal}
        />
      </View>
      <OffsetContainer padding={16} backgroundColor={colors.dark}>
        <Header color={colors.white}>
          ₱ {Math.abs(totalFunds).toLocaleString()}
        </Header>
      </OffsetContainer>
      <VerticalSpace spacer={16} />

      <MonthlyDetailsCard
        title="Income"
        incomeSources={incomeSourcesMockData}
        onShowIncomeSourcesActionModal={handleShowIncomeSourcesActionModal}
        onNavigateToIncomeSourceDetailsScreen={
          handleNavigateToIncomeSourceDetails
        }
      />
      <VerticalSpace spacer={16} />
      <MonthlyDetailsCard
        title="Expenses"
        incomeSources={expensesMockData}
        onShowIncomeSourcesActionModal={handleShowIncomeSourcesActionModal}
        onNavigateToIncomeSourceDetailsScreen={
          handleNavigateToIncomeSourceDetails
        }
      />
      <VerticalSpace spacer={16} />
      <MoreActionBottomSheet
        ref={moreActionsModalRef}
        onClose={handleHideMoreActionModal}
        onCashInPress={handleNavigateToCashInScreen}
        onCashOutPress={handleNavigateToCashOutScreen}
      />

      <IncomeSourcesActionBottomSheet
        ref={incomeSourcesActionModalRef}
        onClose={handleHideIncomeSourcesActionModalal}
        onAdd={handleNavigateToIncomeSourcesScreen}
      />
    </ScrollableScreen>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
  },
});
