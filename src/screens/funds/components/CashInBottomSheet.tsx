import React from "react";
import * as yup from "yup";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { Controller, useForm } from "react-hook-form";
import moment from "moment";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import {
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";

import { colors } from "../../../layouts/Colors";
import { createFund, fetchFunds } from "../../../store/funds/action";
import { CustomButton } from "../../../components/Button";
import { defaultStyles } from "../../../layouts/DefaultStyles";
import { FundInput } from "../../../store/funds/types";
import { InputAccessory } from "../../../components/InputAccessory";
import { Input } from "../../../components/Input";
import { Screen } from "../../../components/Screens/Screen";
import { useAppDispatch } from "../../../store/hooks";
import { LoadingScreen } from "../../../components/Screens/LoadingScreen";

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

export const CashInBottomSheet = React.forwardRef<BottomSheetModalMethods>(
  ({}, ref) => {
    const dispatch = useAppDispatch();
    const { dismiss } = useBottomSheetModal();
    const inputAccessoryViewID = "cashInInputAccessory";

    const {
      control,
      handleSubmit,
      formState: { errors, isSubmitting },
    } = useForm<FormValues>({
      resolver: yupResolver(validationSchema),
      defaultValues: cashInDefaultValues,
    });

    const renderBackdrop = (backdropProps: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...backdropProps}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    );

    const handleSave = async (data: FormValues) => {
      const fund: FundInput = {
        title: data.title,
        amount: +data.amount,
        date: moment(data.date).format(),
      };

      await dispatch(createFund(fund));
      await dispatch(fetchFunds());
      dismiss();
    };

    if (isSubmitting) return <LoadingScreen />;

    return (
      <BottomSheetModal
        ref={ref}
        snapPoints={["90%"]}
        backdropComponent={renderBackdrop}
      >
        <Screen
          title="Record a Cash-in"
          HeaderRightComponent={
            <CustomButton onPress={handleSubmit(handleSave)} title="Save" />
          }
        >
          <Controller
            control={control}
            name="title"
            render={({ field: { value, onChange, onBlur } }) => (
              <Input
                label="Title"
                Icon={<Entypo name="text" size={24} color={colors.dark} />}
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
                keyboardType="numeric"
                label="Amount"
                Icon={
                  <MaterialIcons
                    name="move-to-inbox"
                    size={32}
                    color={colors.dark}
                  />
                }
                inputAccessoryViewID={inputAccessoryViewID}
                value={value.toString()}
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
      </BottomSheetModal>
    );
  }
);
