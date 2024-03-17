import React, { useEffect, useState } from "react";
import * as yup from "yup";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";
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
import { FundInput } from "../../store/funds/types";
import { InputAccessory } from "../../components/InputAccessory";
import { Input } from "../../components/Inputs/Input";
import { LoadingScreen } from "../../components/Screens/LoadingScreen";
import { Screen } from "../../components/Screens/Screen";
import { useAppDispatch } from "../../store/hooks";
import { FundStackProps } from "../../navigation/FundStackNavigator";
import { incomeMockData } from "../../data/IncomeMockData";
import DropDownPicker from "../../components/Inputs/DropDownPicker";

type FormValues = {
  title: string;
  date: Date;
  amount: number;
};

const cashInDefaultValues = {
  title: "",
  amount: 0,
  date: new Date(),
};

const validationSchema = yup.object().shape({
  title: yup.string().label("Title").required(),
  date: yup.date().label("Date").required(),
  amount: yup
    .number()
    .label("Amount")
    .typeError("Amount is required field")
    .required()
    .moreThan(0, "Amount must be greater than 0"),
});

export const AddIncomeScreen = ({ navigation }: FundStackProps) => {
  const dispatch = useAppDispatch();
  const inputAccessoryViewID = "cashInInputAccessory";

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={handleSubmit(handleSaveIncome)}
          title="Save"
          isValid={isValid}
          disabled={!isValid}
        />
      ),
    });
  }, [navigation]);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: cashInDefaultValues,
    mode: "onChange",
  });

  const handleNavigateToIncomeSources = () => {
    navigation.navigate("IncomeSources");
  };

  const handleSaveIncome = async (data: FormValues) => {
    const fund: FundInput = {
      title: data.title,
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
            name="title"
            render={({ field: { value, onChange, onBlur } }) => (
              <DropDownPicker
                title="Title"
                placeholder="Choose..."
                addItemLabel="Add Income Source"
                items={incomeMockData.map((income) => ({
                  label: income.title,
                  value: income.title,
                }))}
                defaultValue={value}
                onSelectAdd={handleNavigateToIncomeSources}
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
