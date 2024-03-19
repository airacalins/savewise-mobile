import React from "react";
import moment from "moment";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import * as yup from "yup";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import { Controller, useForm } from "react-hook-form";
import {
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "../../components/Buttons/Button";
import { colors } from "../../layouts/Colors";
import { createFund, fetchFunds } from "../../store/funds/action";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { CreateFundInput } from "../../store/funds/types";
import { Input } from "../../components/Inputs/Input";
import { InputAccessory } from "../../components/InputAccessory";
import { LoadingScreen } from "../../components/Screens/LoadingScreen";
import { Screen } from "../../components/Screens/Screen";
import { useAppDispatch } from "../../store/hooks";

type FormValues = {
  title: string;
  amount: number;
  date: Date;
};

const cashOutDefaultValues = {
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

export const AddExpenseScreen = () => {
  const dispatch = useAppDispatch();
  const { dismiss } = useBottomSheetModal();
  const inputAccessoryViewID = "cashOutInputAccesory";

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: cashOutDefaultValues,
    mode: "onChange",
  });

  const renderBackdrop = (backdropProps: BottomSheetBackdropProps) => (
    <BottomSheetBackdrop
      {...backdropProps}
      appearsOnIndex={0}
      disappearsOnIndex={-1}
    />
  );

  const handleSave = async (data: FormValues) => {
    const fund: CreateFundInput = {
      title: data.title,
      amount: +data.amount * -1,
      date: moment(data.date).format(),
    };

    await dispatch(createFund(fund));
    await dispatch(fetchFunds());
    dismiss();
  };

  if (isSubmitting) return <LoadingScreen />;

  return (
    <>
      <Screen
        title="Record a Cash-out"
        HeaderRightComponent={
          <Button
            onPress={handleSubmit(handleSave)}
            title="Save"
            isValid={isValid}
            disabled={!isValid}
          />
        }
      >
        <Controller
          control={control}
          name="title"
          render={({ field: { value, onChange, onBlur } }) => (
            <Input
              label="Title"
              Icon={<Entypo name="text" size={24} color={colors.dark} />}
              placeholder="Ex. Allowance"
              inputAccessoryViewID={inputAccessoryViewID}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              errorMessage={errors.title?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="amount"
          render={({ field: { value, onChange, onBlur } }) => (
            <Input
              label="Amount"
              Icon={
                <MaterialIcons
                  name="move-to-inbox"
                  size={32}
                  color={colors.dark}
                />
              }
              placeholder="Ex. 100"
              keyboardType="numeric"
              inputAccessoryViewID={inputAccessoryViewID}
              value={value > 0 ? value.toString() : ""}
              onChangeText={onChange}
              onBlur={onBlur}
              errorMessage={errors.amount?.message}
            />
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
