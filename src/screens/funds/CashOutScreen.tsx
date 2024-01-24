import React from "react";
import moment from "moment";
import { Controller, useForm } from "react-hook-form";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import {
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

import { colors } from "../../layouts/Colors";
import { CustomButton } from "../../components/Button";
import { InputAccessory } from "../../components/InputAccessory";
import { Input } from "../../components/Input";
import { Screen } from "../../components/Screens/Screen";
import { TouchableOpacity } from "react-native";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { FundsStackProps } from "../../navigation/FundStackNavigator";
import { useAppDispatch } from "../../store/hooks";
import { FundInput } from "../../store/funds/types";
import { LoadingScreen } from "../../components/Screens/LoadingScreen";
import { createFund, fetchFunds } from "../../store/funds/action";

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

export const CashOutScreen = ({ navigation }: FundsStackProps) => {
  const dispatch = useAppDispatch();

  const inputAccessoryViewID = "cashOutInputAccesory";

  const { control, formState, handleSubmit } = useForm<FormValues>({
    defaultValues: cashOutDefaultValues,
  });

  const handleSave = async (data: FormValues) => {
    const fund: FundInput = {
      title: data.title,
      amount: +data.amount * -1,
      date: moment(data.date).format(),
    };

    await dispatch(createFund(fund));
    await dispatch(fetchFunds());

    navigation.goBack();
  };

  if (formState.isSubmitting) return <LoadingScreen />;

  return (
    <>
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
    </>
  );
};
