import React, { useCallback } from "react";
import moment from "moment";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import {
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Controller, useForm } from "react-hook-form";
import { TouchableOpacity } from "react-native";

import { colors } from "../../../layouts/Colors";
import { createFund, fetchFunds } from "../../../store/funds/action";
import { CustomButton } from "../../../components/Button";
import { defaultStyles } from "../../../layouts/DefaultStyles";
import { FundInput } from "../../../store/funds/types";
import { Input } from "../../../components/Input";
import { InputAccessory } from "../../../components/InputAccessory";
import { LoadingScreen } from "../../../components/Screens/LoadingScreen";
import { Screen } from "../../../components/Screens/Screen";
import { useAppDispatch } from "../../../store/hooks";

type FormValues = {
  title: string;
  amount: string;
  date: Date;
};

const cashOutDefaultValues = {
  title: "",
  amount: "",
  date: new Date(),
};

export const CashOutBottomSheet = React.forwardRef<BottomSheetModalMethods>(
  ({}, ref) => {
    const dispatch = useAppDispatch();
    const { dismiss } = useBottomSheetModal();
    const inputAccessoryViewID = "cashOutInputAccesory";

    const { control, formState, handleSubmit } = useForm<FormValues>({
      defaultValues: cashOutDefaultValues,
    });

    const renderBackdrop = useCallback(
      (backdropProps: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          {...backdropProps}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
        />
      ),
      []
    );

    const handleSave = async (data: FormValues) => {
      const fund: FundInput = {
        title: data.title,
        amount: +data.amount * -1,
        date: moment(data.date).format(),
      };

      await dispatch(createFund(fund));
      await dispatch(fetchFunds());

      dismiss();
    };

    if (formState.isSubmitting) return <LoadingScreen />;

    return (
      <BottomSheetModal
        ref={ref}
        snapPoints={["90%"]}
        backdropComponent={renderBackdrop}
      >
        <Screen
          title="Record a Cash-out"
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
