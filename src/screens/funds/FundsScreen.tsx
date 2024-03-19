import React, { useEffect, useMemo, useRef, useState } from "react";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { StyleSheet, View } from "react-native";

import { Button } from "../../components/Buttons/Button";
import { colors } from "../../layouts/Colors";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { fetchFunds } from "../../store/funds/action";
import { FundStackProps } from "../../navigation/FundStackNavigator";
import { Header, Subtitle } from "../../components/Typography";
import { incomeMockData } from "../../data/IncomeMockData";
import { IncomeSourcesActionBottomSheet } from "./components/IncomeSourcesActionBottomSheet";
import { LoadingScreen } from "../../components/Screens/LoadingScreen";
import { MonthlyDetailsCard } from "./components/MonthlyDetailsCard";
import { MoreActionBottomSheet } from "./components/MoreActionBottomSheet";
import { OffsetContainer } from "../../components/Container";
import { ScrollableScreen } from "../../components/Screens/ScrollableScreen";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { VerticalSpace } from "../../components/Spacer";
import { expensesMockData } from "../../data/ExpensesMockData";
import { Modal } from "../../components/Modal/Modal";
import { Input } from "../../components/Inputs/Input";

export const FundsScreen = ({ navigation }: FundStackProps) => {
  const dispatch = useAppDispatch();
  const [isCreateFundLabelModalVisible, setIsCreateFundLabelModalVisible] =
    useState(false);
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

  const handleNavigateToAddIncomeScreen = () => {
    moreActionsModalRef.current?.dismiss();
    navigation.navigate("AddIncome");
  };

  const handleNavigateToAddExpenseScreen = () => {
    moreActionsModalRef.current?.dismiss();
    navigation.navigate("AddExpense");
  };

  const handleNavigateToIncomeSourceDetails = () => {
    navigation.navigate("IncomeDetails");
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
        financialActivities={incomeMockData}
        onShowIncomeSourcesActionModal={handleShowIncomeSourcesActionModal}
        onNavigateToIncomeSourceDetailsScreen={
          handleNavigateToIncomeSourceDetails
        }
      />
      <VerticalSpace spacer={16} />
      <MonthlyDetailsCard
        title="Expenses"
        financialActivities={expensesMockData}
        onShowIncomeSourcesActionModal={handleShowIncomeSourcesActionModal}
        onNavigateToIncomeSourceDetailsScreen={
          handleNavigateToIncomeSourceDetails
        }
      />
      <VerticalSpace spacer={16} />
      <MoreActionBottomSheet
        ref={moreActionsModalRef}
        onClose={handleHideMoreActionModal}
        onCashInPress={handleNavigateToAddIncomeScreen}
        onCashOutPress={handleNavigateToAddExpenseScreen}
      />
      <IncomeSourcesActionBottomSheet
        ref={incomeSourcesActionModalRef}
        onClose={handleHideIncomeSourcesActionModalal}
        onAdd={handleNavigateToIncomeSourcesScreen}
      />
      <Modal
        modalVisible={isCreateFundLabelModalVisible}
        contents={
          <View>
            <Input label="Name" />
            <Button title={"Save"} size="M" bgColor="dark" isValid={false} />
          </View>
        }
        onClose={() => setIsCreateFundLabelModalVisible(false)}
      />
    </ScrollableScreen>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
  },
});
