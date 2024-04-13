import React, { useEffect, useState } from "react";
import DropDownPicker from "../../components/Inputs/DropDownPicker";
import moment from "moment";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "../../components/Buttons/Button";
import { colors } from "../../layouts/Colors";
import { createFund, fetchFunds } from "../../store/funds/action";
import { CreateFundInput } from "../../store/funds/types";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { fetchFundLabelsByYearAndMonth } from "../../store/fundLabels/action";
import { FundLabelFormModal } from "./components/FundLabelFormModal";
import { FundLabelType } from "../../store/fundLabels/types";
import { FundsStackParamList } from "../../navigation/FundStackNavigator";
import { Input } from "../../components/Inputs/Input";
import { InputAccessory } from "../../components/InputAccessory";
import { LoadingScreen } from "../../components/Screens/LoadingScreen";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Screen } from "../../components/Screens/Screen";
import { setSelectedFundLabel } from "../../store/fundLabels/reducer";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

type FormValues = {
  fundLabelId: string;
  date: Date;
  amount: number;
};

const fundDefaultValues = {
  fundLabelId: "",
  amount: 0,
  date: new Date(),
};

const validationSchema = yup.object().shape({
  fundLabelId: yup.string().label("Label").required(),
  date: yup.date().label("Date").required(),
  amount: yup
    .number()
    .label("Amount")
    .typeError("Amount is required field")
    .required()
    .moreThan(0, "Amount must be greater than 0"),
});

type FundStackProps = NativeStackScreenProps<FundsStackParamList, "FundForm">;

export const FundFormScreen = ({ navigation, route }: FundStackProps) => {
  const fundLabelType = route.params?.fundLabelType;
  const dispatch = useAppDispatch();
  const {
    isFetching,
    incomeLabels,
    expenseLabels,
    selectedFundLabel,
    selectedMonthAndYear,
  } = useAppSelector((state) => state.fundLabel);
  const [isCreateFundLabelModalVisible, setIsCreateFundLabelModalVisible] =
    useState(false);
  const inputAccessoryViewID = "cashInInputAccessory";
  const { month: selectedMonth, year: selectedYear } = selectedMonthAndYear;

  const { control, handleSubmit, formState } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: fundDefaultValues,
    mode: "onChange",
  });

  useEffect(() => {
    dispatch(fetchFundLabelsByYearAndMonth(selectedMonthAndYear));
  }, []);

  useEffect(() => {
    return () => {
      dispatch(setSelectedFundLabel(undefined));
    };
  }, []);

  useEffect(() => {
    navigation.setOptions({
      title:
        fundLabelType === FundLabelType.Income ? "Add Income" : "Add Expense",
      headerRight: () => (
        <Button
          title="Save"
          disabled={!formState.isValid}
          bgColor="dark"
          onPress={handleSubmit(handleSaveFund)}
        />
      ),
    });
  }, [navigation, formState]);

  const handleOpenCreateFundLabelModal = () =>
    setIsCreateFundLabelModalVisible(true);

  const handleCloseCreateFundLabelModal = () =>
    setIsCreateFundLabelModalVisible(false);

  const handleSaveFund = async (data: FormValues) => {
    const fund: CreateFundInput = {
      fundLabelId: data.fundLabelId,
      amount: +data.amount,
      date: moment(data.date).format(),
    };
    await dispatch(createFund(fund));
    await dispatch(fetchFunds());
    navigation.navigate("Funds");
  };

  const maximumDate = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    return selectedYear === currentYear && selectedMonth === currentMonth
      ? new Date()
      : new Date(selectedYear, selectedMonth, 0);
  };

  if (formState.isSubmitting || isFetching) return <LoadingScreen />;

  return (
    <>
      <Screen>
        <View>
          <Controller
            control={control}
            name="fundLabelId"
            render={({ field: { value, onChange } }) => (
              <DropDownPicker
                title="Title"
                placeholder="Choose..."
                addItemLabel="Add Income Source"
                items={(fundLabelType === FundLabelType.Income
                  ? incomeLabels
                  : expenseLabels
                ).map(({ id, title }) => ({
                  id: id,
                  value: id,
                  label: title,
                }))}
                defaultValue={{
                  id: selectedFundLabel?.id ?? "",
                  label: selectedFundLabel?.title ?? "",
                }}
                onSelectAdd={handleOpenCreateFundLabelModal}
                onSelectItem={(value) => onChange(value.id)}
              />
            )}
          />
        </View>

        <Controller
          control={control}
          name="amount"
          render={({ field: { value, onChange, onBlur } }) => (
            <View style={{ zIndex: -999 }}>
              <Input
                keyboardType="numeric"
                label="Amount"
                placeholder="Ex. 100"
                Icon={
                  <MaterialIcons
                    name="move-to-inbox"
                    size={32}
                    color={colors.dark}
                  />
                }
                inputAccessoryViewID={inputAccessoryViewID}
                value={value > 0 ? value.toString() : ""}
                onChangeText={onChange}
                onBlur={onBlur}
                errorMessage={formState.errors.amount?.message}
              />
            </View>
          )}
        />

        <FundLabelFormModal
          fundLabelType={FundLabelType.Income}
          isVisible={isCreateFundLabelModalVisible}
          onClose={handleCloseCreateFundLabelModal}
          label="Name"
        />
      </Screen>

      <InputAccessory
        nativeID={inputAccessoryViewID}
        LeadingComponent={
          <TouchableOpacity style={defaultStyles.centerAlignHorizontally}>
            <MaterialCommunityIcons
              name="calendar-blank-outline"
              size={24}
              color={colors.dark}
            />
            <Controller
              name="date"
              control={control}
              render={({ field: { value, onChange } }) => (
                <RNDateTimePicker
                  onChange={(_, date) => onChange(date)}
                  value={value}
                  minimumDate={new Date(selectedYear, selectedMonth - 1, 1)}
                  maximumDate={maximumDate()}
                  mode="date"
                />
              )}
            />
          </TouchableOpacity>
        }
      />
    </>
  );
};
