import React, { useEffect, useMemo, useRef, useState } from "react";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { View } from "react-native";

import { FundLabelFormModal } from "./components/FundLabelFormModal";
import { AddFundLabelActionBottomSheet } from "./components/AddFundLabelActionBottomSheet";
import { Button } from "../../components/Buttons/Button";
import { colors } from "../../layouts/Colors";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { fetchFunds } from "../../store/funds/action";
import { FundActionBottomSheet } from "./components/FundActionBottomSheet";
import { FundLabelType } from "../../store/fundLabels/types";
import { FundStackProps } from "../../navigation/FundStackNavigator";
import { Header, Subtitle } from "../../components/Typography";
import { LoadingScreen } from "../../components/Screens/LoadingScreen";
import { FundLabelsCard } from "./components/FundLabelsCard";
import { OffsetContainer } from "../../components/Container";
import { ScrollableScreen } from "../../components/Screens/ScrollableScreen";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { VerticalSpace } from "../../components/Spacer";
import { fetchFundLabels } from "../../store/fundLabels/action";

export const FundsScreen = ({ navigation }: FundStackProps) => {
  const dispatch = useAppDispatch();
  const { isFetching, funds, incomeFunds, expenseFunds } = useAppSelector(
    (state) => state.fund
  );
  const {
    isFetching: isFetchingFundLabels,
    incomeLabels,
    expenseLabels,
  } = useAppSelector((state) => state.fundLabel);
  const fundsActionBottomSheetRef = useRef<BottomSheetModalMethods>(null);
  const createFundLabelActionBottomSheetRef =
    useRef<BottomSheetModalMethods>(null);
  const [isAddIncomeModalVisible, setIsAddIncomeModalVisible] = useState(false);
  const [fundLabelType, setFundLabelType] = useState(FundLabelType.Income);

  useEffect(() => {
    dispatch(fetchFunds());
    dispatch(fetchFundLabels());
  }, []);

  const totalIncome = useMemo(
    () =>
      incomeFunds.reduce((accumulator, fund) => accumulator + fund.amount, 0),
    [funds]
  );

  const totalExpense = useMemo(
    () =>
      expenseFunds.reduce((accumulator, fund) => accumulator + fund.amount, 0),
    [funds]
  );

  const totalFunds = totalIncome - totalExpense;

  if (isFetching) return <LoadingScreen />;

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

  return (
    <ScrollableScreen>
      <View style={defaultStyles.centerHorizontallyBetween}>
        <View style={defaultStyles.px8}>
          <Subtitle>Total Funds</Subtitle>
        </View>
        <Button
          title="Add / Manage"
          uppercase
          onPress={handleShowFundActionBottomSheet}
        />
      </View>
      <OffsetContainer padding={16} backgroundColor={colors.dark}>
        <Header color={colors.white}>
          ₱ {Math.abs(totalFunds).toLocaleString()}
        </Header>
      </OffsetContainer>
      <VerticalSpace spacer={16} />
      <FundLabelsCard
        title="Income"
        total={totalIncome}
        labels={incomeLabels}
        funds={incomeFunds}
        onCreateFundLabel={handleAddIncomeActionBottomSheet}
      />
      <VerticalSpace spacer={16} />
      <FundLabelsCard
        title="Expenses"
        total={totalExpense}
        labels={expenseLabels}
        funds={expenseFunds}
        onCreateFundLabel={handleAddExpenseActionBottomSheet}
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
