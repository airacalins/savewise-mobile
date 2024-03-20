import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import moment from "moment";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "../../components/Buttons/Button";
import { colors } from "../../layouts/Colors";
import { createFund, fetchFunds } from "../../store/funds/action";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { InputAccessory } from "../../components/InputAccessory";
import { Input } from "../../components/Inputs/Input";
import { LoadingScreen } from "../../components/Screens/LoadingScreen";
import { Screen } from "../../components/Screens/Screen";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { FundsStackParamList } from "../../navigation/FundStackNavigator";
import DropDownPicker from "../../components/Inputs/DropDownPicker";
import { CreateFundInput } from "../../store/funds/types";
import { fetchFundLabels } from "../../store/fundLabels/action";
import { FundLabelType } from "../../store/fundLabels/types";
import { FundLabelFormModal } from "./components/FundLabelFormModal";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

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
  const { incomeLabels: fundLabels } = useAppSelector(
    (state) => state.fundLabel
  );
  const [isCreateFundLabelModalVisible, setIsCreateFundLabelModalVisible] =
    useState(false);
  const inputAccessoryViewID = "cashInInputAccessory";

  useEffect(() => {
    navigation.setOptions({
      title:
        fundLabelType === FundLabelType.Income ? "Add Income" : "Add Expense",
      headerRight: () => (
        <Button
          title="Save"
          isValid={isValid}
          disabled={!isValid}
          onPress={handleSubmit(handleSaveFund)}
        />
      ),
    });
  }, [navigation]);

  useEffect(() => {
    dispatch(fetchFundLabels());
  }, [fundLabels]);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: fundDefaultValues,
    mode: "onChange",
  });

  const handleOpenCreateFundLabelModal = () => {
    setIsCreateFundLabelModalVisible(true);
  };

  const handleCloseCreateFundLabelModal = () => {
    setIsCreateFundLabelModalVisible(false);
  };

  const handleSaveFund = async (data: FormValues) => {
    const fund: CreateFundInput = {
      fundLabelId: data.fundLabelId,
      amount: +data.amount,
      date: moment(data.date).format(),
    };

    await dispatch(createFund(fund));
    await dispatch(fetchFunds());
  };

  if (isSubmitting) return <LoadingScreen />;

  return (
    <>
      <Screen>
        <View>
          <Controller
            control={control}
            name="fundLabelId"
            render={({ field: { value, onChange, onBlur } }) => (
              <DropDownPicker
                title="Title"
                placeholder="Choose..."
                addItemLabel="Add Income Source"
                items={fundLabels.map((income) => ({
                  label: income.title,
                  value: income.title,
                }))}
                defaultValue={value}
                onSelectAdd={handleOpenCreateFundLabelModal}
                onSelect={onChange}
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
                errorMessage={errors.amount?.message}
              />
            </View>
          )}
        />
        <FundLabelFormModal
          type={FundLabelType.Income}
          isVisible={isCreateFundLabelModalVisible}
          onClose={handleCloseCreateFundLabelModal}
          label={"Fund name"}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dropdownContainer: {
    width: 200,
  },
  dropdown: {
    backgroundColor: "#fafafa",
  },
  dropdownItems: {
    backgroundColor: "#ffffff",
  },
});
