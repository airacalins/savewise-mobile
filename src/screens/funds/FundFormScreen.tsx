import React, { useEffect, useState } from "react";
import DropDownPicker from "../../components/Inputs/DropDownPicker";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "../../components/Buttons/Button";
import { colors } from "../../layouts/Colors";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { fetchFundLabels } from "../../store/fundLabels/action";
import { FundLabelFormModal } from "./components/FundLabelFormModal";
import { FundLabelType } from "../../store/fundLabels/types";
import { FundsStackParamList } from "../../navigation/FundStackNavigator";
import { Input } from "../../components/Inputs/Input";
import { InputAccessory } from "../../components/InputAccessory";
import { LoadingScreen } from "../../components/Screens/LoadingScreen";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Screen } from "../../components/Screens/Screen";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setSelectedFundLabel } from "../../store/fundLabels/reducer";
import { CreateFundInput } from "../../store/funds/types";
import moment from "moment";
import { createFund, fetchFunds } from "../../store/funds/action";

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
  const { isFetching, incomeLabels, expenseLabels, selectedFundLabel } =
    useAppSelector((state) => state.fundLabel);
  const [isCreateFundLabelModalVisible, setIsCreateFundLabelModalVisible] =
    useState(false);
  const inputAccessoryViewID = "cashInInputAccessory";

  const { control, handleSubmit, formState } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: fundDefaultValues,
    mode: "onChange",
  });

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
    console.log("🚀 ~ useEffect ~ formState.isValid:", formState.isValid);
  }, [navigation, formState]);

  useEffect(() => {
    dispatch(fetchFundLabels());
  }, []);

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
                // value={value}
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
