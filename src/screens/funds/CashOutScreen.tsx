import React from "react";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

import { colors } from "../../layouts/Colors";
import { CustomButton } from "../../components/Button";
import { FundsInputAccessory } from "./components/FundsInputAccessory";
import { FundsStackProps } from "../../navigation/FundStackNavigator";
import { Input } from "../../components/Input";
import { Padding } from "../../components/Padding";
import { Screen } from "../../components/Screen";

export const CashOutScreen = ({ navigation }: FundsStackProps) => {
  const inputAccessoryViewID = "otherOptions";

  const handleSave = () => navigation.goBack();

  return (
    <>
      <Screen
        title="Record a Cash-out"
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
            Icon={<MaterialIcons name="outbox" size={32} color={colors.dark} />}
            autoFocus
            returnKeyType="next"
            keyboardType="numeric"
            inputAccessoryViewID={inputAccessoryViewID}
          />
        </Padding>
      </Screen>

      <FundsInputAccessory nativeID={inputAccessoryViewID} />
    </>
  );
};
