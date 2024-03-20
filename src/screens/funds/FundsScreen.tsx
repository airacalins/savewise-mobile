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
import { LoadingScreen } from "../../components/Screens/LoadingScreen";
import { MonthlyDetailsCard } from "./components/MonthlyDetailsCard";
import { FundActionBottomSheet } from "./components/FundActionBottomSheet";
import { OffsetContainer } from "../../components/Container";
import { ScrollableScreen } from "../../components/Screens/ScrollableScreen";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { VerticalSpace } from "../../components/Spacer";
import { expensesMockData } from "../../data/ExpensesMockData";
import { Modal } from "../../components/Modal/Modal";
import { Input } from "../../components/Inputs/Input";
import { AddIncomeActionBottomSheet } from "./components/AddIncomeActionBottomSheet";
import { AddFundLabelModal } from "./components/AddFundLabelModal";
import { FundLabelType } from "../../store/fundLabels/types";

export const FundsScreen = ({ navigation }: FundStackProps) => {
  const dispatch = useAppDispatch();
  const [isAddIncomeModalVisible, setIsAddIncomeModalVisible] = useState(false);
  const [isAddExpenseModalVisible, setIsAddExpenseModalVisible] =
    useState(false);
  const { isFetching, funds } = useAppSelector((state) => state.fund);
  const fundsActionBottomSheetRef = useRef<BottomSheetModalMethods>(null);
  const addIncomeActionBottomSheetRef = useRef<BottomSheetModalMethods>(null);
  const addExpenseActionBottomSheetRef = useRef<BottomSheetModalMethods>(null);

  const totalFunds = useMemo(
    () => funds.reduce((accumulator, fund) => accumulator + fund.amount, 0),
    [funds]
  );

  const handleShowFundsActionBottomSheet = () =>
    fundsActionBottomSheetRef.current?.present();

  const handleHideFundActionBottomSheet = () =>
    fundsActionBottomSheetRef.current?.dismiss();

  const handleShowAddIncomeBottomSheet = () =>
    addIncomeActionBottomSheetRef.current?.present();

  const handleHideAddIncomeBottomSheet = () =>
    addIncomeActionBottomSheetRef.current?.dismiss();

  const handleShowAddExpenseActionBottomSheet = () =>
    addExpenseActionBottomSheetRef.current?.present();

  const handleHideAddExpenseBottomSheet = () =>
    addExpenseActionBottomSheetRef.current?.dismiss();

  const handleShowIncomeLabelModal = () => {
    addIncomeActionBottomSheetRef.current?.dismiss();
    setIsAddIncomeModalVisible(true);
  };

  const handleNavigateToAddIncomeScreen = () => {
    fundsActionBottomSheetRef.current?.dismiss();
    navigation.navigate("AddIncome");
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
          onPress={handleShowFundsActionBottomSheet}
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
        onShowIncomeSourcesActionModal={handleShowAddIncomeBottomSheet}
        onNavigateToIncomeSourceDetailsScreen={
          handleNavigateToIncomeSourceDetails
        }
      />
      <VerticalSpace spacer={16} />
      <MonthlyDetailsCard
        title="Expenses"
        financialActivities={expensesMockData}
        onShowIncomeSourcesActionModal={handleShowAddIncomeBottomSheet}
        onNavigateToIncomeSourceDetailsScreen={
          handleNavigateToIncomeSourceDetails
        }
      />
      <VerticalSpace spacer={16} />
      <FundActionBottomSheet
        ref={fundsActionBottomSheetRef}
        onClose={handleHideFundActionBottomSheet}
        onAddIncome={handleNavigateToAddIncomeScreen}
        onAddExpense={() => {}}
      />
      <AddIncomeActionBottomSheet
        ref={addIncomeActionBottomSheetRef}
        onAddIncomeLabel={handleShowIncomeLabelModal}
        onClose={handleHideAddIncomeBottomSheet}
      />
      <AddFundLabelModal
        type={FundLabelType.Income}
        isVisible={isAddIncomeModalVisible}
        onClose={() => setIsAddIncomeModalVisible(false)}
      />
      <AddFundLabelModal
        type={FundLabelType.Expense}
        isVisible={isAddExpenseModalVisible}
        onClose={() => setIsAddExpenseModalVisible(false)}
      />
    </ScrollableScreen>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
  },
});
