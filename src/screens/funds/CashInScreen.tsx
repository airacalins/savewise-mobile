import React, { useState } from "react";
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
import { Padding } from "../../components/Padding";
import { Screen } from "../../components/Screen";
import { TouchableOpacity } from "react-native";
import { defaultStyles } from "../../layouts/DefaultStyles";

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

export const CashInScreen: React.FC = () => {
  const inputAccessoryViewID = "cashInInputAccessory";
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: cashInDefaultValues,
  });

  const handleSave = (data: FormValues) => {
    setIsSubmitting(true);
    // agent.Funds.list().then((data) => setFunds(data));

    console.log("Form submitted", data);
    // navigation.goBack();
  };

  return (
    <>
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
    </>
  );
};
