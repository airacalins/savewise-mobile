import React, { useState } from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

import { colors } from "../../layouts/Colors";
import { CustomButton } from "../../components/Button";
import { FundsInputAccessory } from "./components/FundsInputAccessory";
import { FundsStackProps } from "../../navigation/FundStackNavigator";
import { Input } from "../../components/Input";
import { Padding } from "../../components/Padding";
import { Screen } from "../../components/Screen";

export const CashInScreen = ({ navigation }: FundsStackProps) => {
  const inputAccessoryViewID = "otherOptions";
  const [date, setDate] = useState(new Date());
  const [isOpenDatePicker, setIsOpenDatePicker] = useState(false);

  const handleSave = () => navigation.goBack();

  return (
    <>
      <Screen
        title="Record a Cash-in"
        HeaderRightComponent={
          <CustomButton onPress={handleSave} title="Save" />
        }
      >
        <Padding px={8}>
          <Input
            label="Description"
            Icon={<Entypo name="text" size={24} color={colors.dark} />}
            autoFocus
            returnKeyType="next"
            inputAccessoryViewID={inputAccessoryViewID}
          />
          <Input
            label="Amount"
            Icon={
              <MaterialIcons
                name="move-to-inbox"
                size={32}
                color={colors.dark}
              />
            }
            keyboardType="numeric"
            returnKeyType="next"
            inputAccessoryViewID={inputAccessoryViewID}
          />
        </Padding>
      </Screen>

      <RNDateTimePicker value={new Date()} mode="date" />

      <FundsInputAccessory nativeID={inputAccessoryViewID} />
    </>
  );
};
