import React from "react";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

import { colors } from "../../layouts/Colors";
import { CustomButton } from "../../components/Button";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { FundsInputAccessory } from "./components/FundsInputAccessory";
import { FundsStackProps } from "../../navigation/types";
import { Input } from "../../components/Input";
import { Padding } from "../../components/Padding";
import { Screen } from "../../components/Screen";
import { Subtitle } from "../../components/Typography";
import { View } from "react-native";

export const CashInScreen = ({ navigation }: FundsStackProps) => {
  const inputAccessoryViewID = "otherOptions";

  const handleSave = () => navigation.goBack();

  return (
    <>
      <Screen>
        <Padding py={16}>
          <Padding pl={16} pr={8}>
            <View style={defaultStyles.centerHorizontallyBetween}>
              <Subtitle>Record a Cash-in</Subtitle>
              <CustomButton onPress={handleSave} title="Save" />
            </View>
          </Padding>

          <View style={defaultStyles.listTileSeparator} />

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
        </Padding>
      </Screen>

      <FundsInputAccessory nativeID={inputAccessoryViewID} />
    </>
  );
};
