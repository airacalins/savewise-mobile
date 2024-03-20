import React, { useEffect, useMemo, useRef, useState } from "react";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { View } from "react-native";

import { FundLabelFormModal } from "./components/FundLabelFormModal";
import { AddFundLabelActionBottomSheet } from "./components/AddFundLabelActionBottomSheet";
import { Button } from "../../components/Buttons/Button";
import { colors } from "../../layouts/Colors";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { expensesMockData } from "../../data/ExpensesMockData";
import { fetchFunds } from "../../store/funds/action";
import { FundActionBottomSheet } from "./components/FundActionBottomSheet";
import { FundLabelType } from "../../store/fundLabels/types";
import { FundStackProps } from "../../navigation/FundStackNavigator";
import { Header, Subtitle } from "../../components/Typography";
import { incomeMockData } from "../../data/IncomeMockData";
import { LoadingScreen } from "../../components/Screens/LoadingScreen";
import { MonthlyDetailsCard } from "./components/MonthlyDetailsCard";
import { OffsetContainer } from "../../components/Container";
import { ScrollableScreen } from "../../components/Screens/ScrollableScreen";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { VerticalSpace } from "../../components/Spacer";

export const FundsScreen = ({ navigation }: FundStackProps) => {
  const dispatch = useAppDispatch();
  const { isFetching, funds } = useAppSelector((state) => state.fund);
  const [isAddIncomeModalVisible, setIsAddIncomeModalVisible] = useState(false);
  const fundsActionBottomSheetRef = useRef<BottomSheetModalMethods>(null);
  const createFundLabelActionBottomSheetRef =
    useRef<BottomSheetModalMethods>(null);
  const [fundLabelType, setFundLabelType] = useState(FundLabelType.Income);

  const totalFunds = useMemo(
    () => funds.reduce((accumulator, fund) => accumulator + fund.amount, 0),
    [funds]
  );

  const handleShowFundActionBottomSheet = () =>
    fundsActionBottomSheetRef.current?.present();

  const handleNavigateToFundFormScreen = (fundLabelType: FundLabelType) => {
    fundsActionBottomSheetRef.current?.dismiss();
    navigation.navigate("FundForm", { fundLabelType });
  };

  const handleHideFundActionBottomSheet = () =>
    fundsActionBottomSheetRef.current?.dismiss();

  const handleAddIncomeActionBottomSheet = () => {
    setFundLabelType(FundLabelType.Income);
    createFundLabelActionBottomSheetRef.current?.present();
  };

  const handleAddExpenseActionBottomSheet = () => {
    setFundLabelType(FundLabelType.Expense);
    createFundLabelActionBottomSheetRef.current?.present();
  };

  const handleShowFundLabelFormModal = () => {
    createFundLabelActionBottomSheetRef.current?.dismiss();
    setIsAddIncomeModalVisible(true);
  };

  const handleHideFundLabelActionBottomSheet = () =>
    createFundLabelActionBottomSheetRef.current?.dismiss();

  const handleHideFundLabelModal = () => setIsAddIncomeModalVisible(false);

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
          onPress={handleShowFundActionBottomSheet}
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
        onCreateFundLabel={handleAddIncomeActionBottomSheet}
        onNavigateToIncomeSourceDetailsScreen={
          handleNavigateToIncomeSourceDetails
        }
      />
      <VerticalSpace spacer={16} />
      <MonthlyDetailsCard
        title="Expenses"
        financialActivities={expensesMockData}
        onCreateFundLabel={handleAddExpenseActionBottomSheet}
        onNavigateToIncomeSourceDetailsScreen={
          handleNavigateToIncomeSourceDetails
        }
      />
      <VerticalSpace spacer={16} />
      <FundActionBottomSheet
        ref={fundsActionBottomSheetRef}
        onClose={handleHideFundActionBottomSheet}
        onAddIncome={() => handleNavigateToFundFormScreen(FundLabelType.Income)}
        onAddExpense={() =>
          handleNavigateToFundFormScreen(FundLabelType.Expense)
        }
      />
      <AddFundLabelActionBottomSheet
        ref={createFundLabelActionBottomSheetRef}
        onAddIncomeLabel={handleShowFundLabelFormModal}
        onClose={handleHideFundLabelActionBottomSheet}
      />
      <FundLabelFormModal
        label={
          fundLabelType === FundLabelType.Income
            ? "Income Name"
            : "Expense Name"
        }
        fundLabelType={fundLabelType}
        isVisible={isAddIncomeModalVisible}
        onClose={handleHideFundLabelModal}
      />
    </ScrollableScreen>
  );
};
