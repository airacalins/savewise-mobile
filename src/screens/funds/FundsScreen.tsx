import React, { useEffect, useMemo, useRef, useState } from "react";
import moment from "moment";
import { AntDesign } from "@expo/vector-icons";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { FlatList, TouchableOpacity, View } from "react-native";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { FundStackProps } from "../../navigation/FundStackNavigator";
import { FUNDS_QUERY_KEY, getFundsByYearAndMonth } from "../../api/funds/hooks";
import { colors } from "../../layouts/Colors";
import { defaultStyles } from "../../layouts/DefaultStyles";
import {
  FundLabelViewModel,
  FundLabelType,
} from "../../store/fundLabels/types";

import { useDialogState } from "../../hooks/useDialogState";
import {
  FUND_LABEL_QUERY_KEY,
  getFundLabelsByYearAndMonth,
} from "../../api/fundLabels/hooks";
import {
  FundActionBottomSheet,
  AddFundLabelActionBottomSheet,
  FundLabelFormModal,
  FundLabelItem,
  FundLabelsCard,
} from "./components";
import {
  Button,
  Separator,
  OffsetContainer,
  Subtitle,
  VerticalSpace,
  Modal,
  MonthYearPicker,
  DeleteModal,
  Header,
} from "../../components";
import { LoadingScreen } from "../../components/Screens/LoadingScreen";
import { ScrollableScreen } from "../../components/Screens/ScrollableScreen";
import { PESO_SIGN } from "../../utils/string";
import { FundLabel } from "../../api/fundLabels/types";

interface SelectedYearAndMonth {
  year: number;
  month: number;
}

export const FundsScreen = ({ navigation }: FundStackProps) => {
  const createFundLabelActionBottomSheetRef =
    useRef<BottomSheetModalMethods>(null);
  const fundsActionBottomSheetRef = useRef<BottomSheetModalMethods>(null);
  const fundLabelFormModal = useDialogState();
  const deleteFundConfirmationModal = useDialogState();
  const yearAndMonthSelectionModal = useDialogState();
  const [fundLabelType, setFundLabelType] = useState(FundLabelType.Income);

  const [selectedYearAndMonth, setSelectedYearAndMonth] =
    useState<SelectedYearAndMonth>({
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
    });

  // API Calls
  const queryClient = useQueryClient();

  const {
    data: fundsByYearAndMonth,
    isLoading: isLoadingFundsByYearAndMonth,
    refetch: refetchFundsByYearAndMonth,
  } = useQuery({
    queryFn: () =>
      getFundsByYearAndMonth(
        selectedYearAndMonth.year,
        selectedYearAndMonth.month
      ),
    queryKey: [FUNDS_QUERY_KEY],
  });

  const {
    data: fundLabelsByYearAndMonth,
    isLoading: isLoadingFundLabelsByYearAndMonth,
    refetch: refetchFundLabelsByYearAndMonth,
  } = useQuery({
    queryFn: () =>
      getFundLabelsByYearAndMonth(
        selectedYearAndMonth.year,
        selectedYearAndMonth.month
      ),
    queryKey: [FUND_LABEL_QUERY_KEY],
  });

  useEffect(() => {
    if (selectedYearAndMonth) {
      queryClient.invalidateQueries({
        queryKey: [FUNDS_QUERY_KEY],
      });
      queryClient.invalidateQueries({
        queryKey: [FUND_LABEL_QUERY_KEY],
      });
    }
  }, [selectedYearAndMonth, queryClient]);

  // Constants
  const totalIncomeByYearAndMonth = useMemo(() => {
    return fundsByYearAndMonth
      ?.filter((item) => item.fundLabel.fundLabelType === FundLabelType.Income)
      .reduce((accumulator, item) => accumulator + item.amount, 0);
  }, [fundsByYearAndMonth]);

  const totalExpenseByYearAndMonth = useMemo(() => {
    return fundsByYearAndMonth
      ?.filter((item) => item.fundLabel.fundLabelType === FundLabelType.Expense)
      .reduce((accumulator, item) => accumulator + item.amount, 0);
  }, [fundsByYearAndMonth]);

  const totalFunds = useMemo(() => {
    return (totalIncomeByYearAndMonth ?? 0) - (totalExpenseByYearAndMonth ?? 0);
  }, [totalIncomeByYearAndMonth, totalExpenseByYearAndMonth]);

  const incomeLabelsByYearAndMonth = useMemo(() => {
    return fundLabelsByYearAndMonth?.filter(
      (item) => item.fundLabelType === FundLabelType.Income
    );
  }, [fundLabelsByYearAndMonth]);

  const expenseLabelsByYearAndMonth = useMemo(() => {
    return fundLabelsByYearAndMonth?.filter(
      (item) => item.fundLabelType === FundLabelType.Expense
    );
  }, [fundLabelsByYearAndMonth]);

  // Functions
  const handlePullToRefresh = () => {
    refetchFundsByYearAndMonth();
    refetchFundLabelsByYearAndMonth();
  };

  // Functions: Show/Hide Bottom Sheets
  const handleShowIncomeActionBottomSheet = () => {
    setFundLabelType(FundLabelType.Income);
    createFundLabelActionBottomSheetRef.current?.present();
  };

  const handleShowExpenseActionBottomSheet = () => {
    setFundLabelType(FundLabelType.Expense);
    createFundLabelActionBottomSheetRef.current?.present();
  };

  // Functions: Show/Hide Modals
  const handleShowFundLabelFormModal = () => {
    createFundLabelActionBottomSheetRef.current?.dismiss();
    fundLabelFormModal.open();
  };

  const handleHideFundLabelFormModal = () => {
    fundLabelFormModal.close();
  };

  const handleShowDeleteFundLabelModal = (item: FundLabelViewModel) => {
    deleteFundConfirmationModal.open();
  };

  const handleHideDeleteFundLabelModal = () => {
    deleteFundConfirmationModal.close();
  };

  // Navigations
  const handleNavigateToFundFormScreen = (fundLabelType: FundLabelType) => {
    fundsActionBottomSheetRef.current?.dismiss();
    navigation.navigate("FundForm", { fundLabelType });
  };

  const handleNavigateToFundByFundLabelDetails = (
    fundLabel: FundLabelViewModel
  ) => {
    navigation.navigate("FundDetails", { fundLabel });
  };

  // API Calls
  const handleEditFundLabel = (fundLabel: FundLabelViewModel) => {
    fundLabelFormModal.open();
  };

  const handleDeleteFundLabel = () => {
    // if (selectedFundLabel) {
    //   handleHideDeleteFundLabelModal();
    // } else {
    //   console.log("No selected fund");
    // }
  };

  const handleMonthChange = (date: moment.Moment) => {
    const month = +date.format("M");
    setSelectedYearAndMonth((prev) => ({ ...prev, month }));
    refetchFundsByYearAndMonth();
    refetchFundLabelsByYearAndMonth();
    yearAndMonthSelectionModal.close();
  };

  const handleYearChange = (date: moment.Moment) => {
    const year = +date.format("YYYY");
    setSelectedYearAndMonth({ ...selectedYearAndMonth, year });
  };

  // UI
  const renderIncomeLabels = () => (
    <FlatList
      data={incomeLabelsByYearAndMonth}
      keyExtractor={(label) => label.id}
      ItemSeparatorComponent={Separator}
      scrollEnabled={false}
      renderItem={({ item }) => {
        const totalAmount = fundsByYearAndMonth
          ?.filter((fund) => fund.fundLabelId === item.id)
          .reduce((sum, fund) => sum + fund.amount, 0);

        return (
          <FundLabelItem
            fundLabel={item}
            totalFundPerLabel={totalAmount ?? 0}
            onEditFundLabel={() => handleEditFundLabel(item)}
            onDeleteFundLabel={() => handleShowDeleteFundLabelModal(item)}
            onNavigateToDetails={() =>
              handleNavigateToFundByFundLabelDetails(item)
            }
          />
        );
      }}
    />
  );

  const renderExpenseLabels = () => (
    <FlatList
      data={expenseLabelsByYearAndMonth}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={Separator}
      scrollEnabled={false}
      renderItem={({ item }) => {
        const totalAmount = fundsByYearAndMonth
          ?.filter((fund) => fund.fundLabelId === item.id)
          .reduce((sum, fund) => sum + fund.amount, 0);

        return (
          <FundLabelItem
            fundLabel={item}
            totalFundPerLabel={totalAmount ?? 0}
            onEditFundLabel={() => handleEditFundLabel(item)}
            onDeleteFundLabel={() => handleShowDeleteFundLabelModal(item)}
            onNavigateToDetails={() =>
              handleNavigateToFundByFundLabelDetails(item)
            }
          />
        );
      }}
    />
  );

  const isLoading =
    !fundsByYearAndMonth ||
    !fundLabelsByYearAndMonth ||
    isLoadingFundsByYearAndMonth ||
    isLoadingFundLabelsByYearAndMonth;

  if (isLoading) return <LoadingScreen />;

  return (
    <ScrollableScreen isRefreshing={isLoading} onRefresh={handlePullToRefresh}>
      <TouchableOpacity onPress={yearAndMonthSelectionModal.open}>
        <OffsetContainer padding={16}>
          <View style={defaultStyles.centerHorizontallyBetween}>
            <Subtitle
              text={`${moment()
                .month(+selectedYearAndMonth.month - 1)
                .format("MMM")} ${selectedYearAndMonth.year}`}
            />
            <AntDesign name="calendar" size={20} color={colors.dark} />
          </View>
        </OffsetContainer>
      </TouchableOpacity>
      <VerticalSpace spacer={8} />
      <View style={defaultStyles.centerHorizontallyBetween}>
        <View style={defaultStyles.px8}>
          <Subtitle text="Total Funds" />
        </View>
        <Button
          title="Add / Manage"
          uppercase
          onPress={fundsActionBottomSheetRef.current?.present}
        />
      </View>
      <OffsetContainer padding={16} backgroundColor={colors.dark}>
        <Header
          color={colors.white}
          text={`${totalFunds < 0 ? "-" : ""} ${PESO_SIGN}${Math.abs(
            totalFunds
          ).toLocaleString()}`}
        />
      </OffsetContainer>
      <VerticalSpace spacer={16} />
      <FundLabelsCard
        title="Income"
        total={totalIncomeByYearAndMonth ?? 0}
        onCreateFundLabel={handleShowIncomeActionBottomSheet}
        ListComponent={renderIncomeLabels()}
      />
      <VerticalSpace spacer={16} />
      <FundLabelsCard
        title="Expenses"
        total={totalExpenseByYearAndMonth ?? 0}
        onCreateFundLabel={handleShowExpenseActionBottomSheet}
        ListComponent={renderExpenseLabels()}
      />
      <VerticalSpace spacer={16} />
      <FundActionBottomSheet
        ref={fundsActionBottomSheetRef}
        onClose={() => fundsActionBottomSheetRef.current?.dismiss()}
        onAddIncome={() => handleNavigateToFundFormScreen(FundLabelType.Income)}
        onAddExpense={() =>
          handleNavigateToFundFormScreen(FundLabelType.Expense)
        }
      />
      <AddFundLabelActionBottomSheet
        ref={createFundLabelActionBottomSheetRef}
        onAddIncomeLabel={handleShowFundLabelFormModal}
        onClose={() => createFundLabelActionBottomSheetRef.current?.dismiss()}
      />
      <Modal
        modalVisible={yearAndMonthSelectionModal.isVisible}
        contents={
          <MonthYearPicker
            selectedDate={
              new Date(
                +selectedYearAndMonth.year,
                +selectedYearAndMonth.month - 1
              )
            }
            initialView={moment({
              year: +selectedYearAndMonth.year,
              month: +selectedYearAndMonth.month - 1,
              day: 1,
            })}
            onMonthTapped={handleMonthChange}
            onYearChanged={handleYearChange}
          />
        }
      />
      <FundLabelFormModal
        label={
          fundLabelType === FundLabelType.Income
            ? "Income Name"
            : "Expense Name"
        }
        fundLabelType={fundLabelType}
        isVisible={fundLabelFormModal.isVisible}
        onClose={handleHideFundLabelFormModal}
      />
      <DeleteModal
        isVisible={deleteFundConfirmationModal.isVisible}
        title={`Are you sure you want to delete?`}
        subTitle="Deleting it will also delete all files related to the total funds."
        onClose={handleHideDeleteFundLabelModal}
        onDelete={handleDeleteFundLabel}
        onCancel={handleHideDeleteFundLabelModal}
      />
    </ScrollableScreen>
  );
};
