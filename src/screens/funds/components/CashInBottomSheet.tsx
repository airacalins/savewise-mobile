import React from "react";
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
import { TouchableOpacity, View } from "react-native";

import { colors } from "../../../layouts/Colors";
import { createFund, fetchFunds } from "../../../store/funds/action";
import { CustomButton } from "../../../components/Button";
import { defaultStyles } from "../../../layouts/DefaultStyles";
import { FundInput } from "../../../store/funds/types";
import { InputAccessory } from "../../../components/InputAccessory";
import { Input } from "../../../components/Input";
import { Padding } from "../../../components/Padding";
import { Screen } from "../../../components/Screens/Screen";
import { useAppDispatch } from "../../../store/hooks";

type FormValues = {
  title: string;
  amount: string;
  date: Date;
};

const cashInDefaultValues = {
  title: "",
  amount: "",
  date: new Date(),
};

export const CashInBottomSheet = React.forwardRef<BottomSheetModalMethods>(
  ({}, ref) => {
    const dispatch = useAppDispatch();
    const { dismiss } = useBottomSheetModal();
    const inputAccessoryViewID = "cashInInputAccessory";

    const { control, handleSubmit } = useForm<FormValues>({
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
          <Padding px={8}>
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
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          </Padding>
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
