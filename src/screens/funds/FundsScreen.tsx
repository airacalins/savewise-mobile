import React, { useEffect, useMemo, useRef, useState } from "react";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { FlatList, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { FundLabelFormModal } from "./components/FundLabelFormModal";
import { AddFundLabelActionBottomSheet } from "./components/AddFundLabelActionBottomSheet";
import { Button, ButtonSize } from "../../components/Buttons/Button";
import { colors } from "../../layouts/Colors";
import { defaultStyles } from "../../layouts/DefaultStyles";
import {
  deleteFundLabel,
  fetchFundLabelById,
  fetchFundLabels,
} from "../../store/fundLabels/action";
import { fetchFunds } from "../../store/funds/action";
import { FundActionBottomSheet } from "./components/FundActionBottomSheet";
import { FundLabel, FundLabelType } from "../../store/fundLabels/types";
import { FundStackProps } from "../../navigation/FundStackNavigator";
import { Body, Header, Subtitle } from "../../components/Typography";
import { LoadingScreen } from "../../components/Screens/LoadingScreen";
import { FundLabelsCard } from "./components/FundLabelsCard";
import { OffsetContainer } from "../../components/Container";
import { ScrollableScreen } from "../../components/Screens/ScrollableScreen";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { VerticalSpace } from "../../components/Spacer";
import { FundLabelItem } from "./components/FundLabelItem";
import { Separator } from "../../components/Separator/Separator";
import { setSelectedFundLabel } from "../../store/fundLabels/reducer";
import { Modal } from "../../components/Modal/Modal";
import { TextButton } from "../../components/Buttons/TextButton";
import { DeleteModal } from "../../components/Modal/DeleteModal";

export const FundsScreen = ({ navigation }: FundStackProps) => {
  const dispatch = useAppDispatch();
  const {
    isFetching: isFetchingFunds,
    funds,
    incomeFunds,
    expenseFunds,
  } = useAppSelector((state) => state.fund);
  const {
    isFetching: isFetchingFundLabels,
    selectedFundLabel,
    incomeLabels,
    expenseLabels,
  } = useAppSelector((state) => state.fundLabel);
  const fundsActionBottomSheetRef = useRef<BottomSheetModalMethods>(null);
  const createFundLabelActionBottomSheetRef =
    useRef<BottomSheetModalMethods>(null);

  const [isFundLabelFormModalVisible, setIsFundLabelFormModalVisible] =
    useState(false);
  const [isDeleteFundLabelModalVisible, setIsDeleteFundLabelModalVisible] =
    useState(false);
  const [fundLabelType, setFundLabelType] = useState(FundLabelType.Income);

  console.log("🚀 ~ FundsScreen ~ selectedFundLabel:", selectedFundLabel);
  console.log(
    "🚀 ~ FundsScreen ~ isFundLabelFormModalVisible:",
    isFundLabelFormModalVisible
  );
  console.log("Fund Screens");

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

  if (isFetchingFunds && isFetchingFundLabels) return <LoadingScreen />;

  // Show/Hide Bottom Sheets
  const handleShowFundActionBottomSheet = () =>
    fundsActionBottomSheetRef.current?.present();

  const handleHideFundActionBottomSheet = () =>
    fundsActionBottomSheetRef.current?.dismiss();

  const handleShowIncomeActionBottomSheet = () => {
    setFundLabelType(FundLabelType.Income);
    createFundLabelActionBottomSheetRef.current?.present();
  };

  const handleShowExpenseActionBottomSheet = () => {
    setFundLabelType(FundLabelType.Expense);
    createFundLabelActionBottomSheetRef.current?.present();
  };

  const handleHideFundLabelActionBottomSheet = () =>
    createFundLabelActionBottomSheetRef.current?.dismiss();

  // Show/Hide Modals
  const handleShowFundLabelFormModal = () => {
    createFundLabelActionBottomSheetRef.current?.dismiss();
    setIsFundLabelFormModalVisible(true);
  };

  const handleHideFundLabelFormModal = () => {
    dispatch(setSelectedFundLabel(undefined));
    setIsFundLabelFormModalVisible(false);
  };

  const handleShowDeleteFundLabelModal = (item: FundLabel) => {
    dispatch(setSelectedFundLabel(item));
    setIsDeleteFundLabelModalVisible(true);
  };

  const handleHideDeleteFundLabelModal = () => {
    dispatch(setSelectedFundLabel(undefined));
    setIsDeleteFundLabelModalVisible(false);
  };

  // Navigations
  const handleNavigateToCreateFundFormScreen = (
    fundLabelType: FundLabelType
  ) => {
    fundsActionBottomSheetRef.current?.dismiss();
    navigation.navigate("FundForm", { fundLabelType });
  };

  const handleNavigateToFundByFundLabelDetails = (
    fundLabelName: string,
    fundLabelId: string
  ) => {
    navigation.navigate("FundDetails", { fundLabelName, fundLabelId });
  };

  // API Calls
  const handleEditFundLabel = (fundLabel: FundLabel) => {
    setIsFundLabelFormModalVisible(true);
    dispatch(fetchFundLabelById(fundLabel.id));
  };

  const handleDeleteFundLabel = () => {
    if (selectedFundLabel) {
      dispatch(deleteFundLabel(selectedFundLabel.id));
      handleHideDeleteFundLabelModal();
      dispatch(fetchFunds());
      dispatch(fetchFundLabels());
    } else {
      console.log("No selected fund");
    }
  };

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
        onCreateFundLabel={handleShowIncomeActionBottomSheet}
        ListComponent={
          <FlatList
            data={incomeLabels}
            keyExtractor={(label) => label.id}
            renderItem={({ item }) => {
              const fundsByFundLabelId = funds.filter(
                (fund) => fund.fundLabel.id === item.id
              );
              const totalFundsByFundLabel = fundsByFundLabelId.reduce(
                (accumulator, fund) => accumulator + fund.amount,
                0
              );

              return (
                <FundLabelItem
                  fundLabel={item}
                  totalFundPerLabel={totalFundsByFundLabel}
                  onEditFundLabel={() => handleEditFundLabel(item)}
                  onDeleteFundLabel={() => handleShowDeleteFundLabelModal(item)}
                  onNavigateToDetails={() =>
                    handleNavigateToFundByFundLabelDetails(item.title, item.id)
                  }
                />
              );
            }}
            ItemSeparatorComponent={Separator}
            scrollEnabled={false}
          />
        }
      />
      <VerticalSpace spacer={16} />
      <FundLabelsCard
        title="Expenses"
        total={totalExpense}
        onCreateFundLabel={handleShowExpenseActionBottomSheet}
        ListComponent={
          <FlatList
            data={expenseLabels}
            keyExtractor={(label) => label.id}
            renderItem={({ item }) => {
              const fundsByFundLabelId = funds.filter(
                (fund) => fund.fundLabel.id === item.id
              );
              const totalFundsByFundLabel = fundsByFundLabelId.reduce(
                (accumulator, fund) => accumulator + fund.amount,
                0
              );

              return (
                <FundLabelItem
                  fundLabel={item}
                  totalFundPerLabel={totalFundsByFundLabel}
                  onEditFundLabel={() => handleEditFundLabel(item)}
                  onDeleteFundLabel={() => handleShowDeleteFundLabelModal(item)}
                  onNavigateToDetails={() =>
                    handleNavigateToFundByFundLabelDetails(item.title, item.id)
                  }
                />
              );
            }}
            ItemSeparatorComponent={Separator}
            scrollEnabled={false}
          />
        }
      />
      <VerticalSpace spacer={16} />
      <FundActionBottomSheet
        ref={fundsActionBottomSheetRef}
        onClose={handleHideFundActionBottomSheet}
        onAddIncome={() =>
          handleNavigateToCreateFundFormScreen(FundLabelType.Income)
        }
        onAddExpense={() =>
          handleNavigateToCreateFundFormScreen(FundLabelType.Expense)
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
        isVisible={isFundLabelFormModalVisible}
        onClose={handleHideFundLabelFormModal}
      />
      <DeleteModal
        isVisible={isDeleteFundLabelModalVisible}
        title={`Are you sure you want to delete ${
          selectedFundLabel?.title ?? ""
        }?`}
        subTitle="Deleting it will also delete all files related to the total funds."
        onClose={handleHideDeleteFundLabelModal}
        onDelete={handleDeleteFundLabel}
        onCancel={handleHideDeleteFundLabelModal}
      />
    </ScrollableScreen>
  );
};
