import React from "react";
import {
  Entypo,
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

import { colors } from "../../layouts/Colors";
import { CustomButton } from "../../components/Button";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { FundsStackProps } from "../../navigation/types";
import { Input } from "../../components/Input";
import { Padding } from "../../components/Padding";
import { Screen } from "../../components/Screen";
import { Caption, Subtitle } from "../../components/Typography";
import { HorizontalSpace, VerticalSpace } from "../../components/Spacer";
import { InputAccessoryView, View } from "react-native";
import { OffsetContainer } from "../../components/Container";
import { FundsInputAccessory } from "./components/FundsInputAccessory";

export const AllocateFundScreen = ({ navigation }: FundsStackProps) => {
  const inputAccessoryViewID = "otherOptions";

  const handleSave = () => navigation.goBack();

  return (
    <>
      <Screen>
        <Padding py={16}>
          <Padding pl={16} pr={8}>
            <View style={defaultStyles.centerHorizontallyBetween}>
              <Subtitle>Allocate Fund</Subtitle>
              <CustomButton title="Save" onPress={handleSave} />
            </View>
          </Padding>

          <View style={defaultStyles.listTileSeparator} />

          <VerticalSpace spacer={8} />

          <Padding px={8}>
            <Input
              Icon={<FontAwesome5 name="boxes" size={24} color={colors.dark} />}
            />
            <Input
              label="Description"
              Icon={<Entypo name="text" size={24} color={colors.dark} />}
              returnKeyType="next"
              inputAccessoryViewID={inputAccessoryViewID}
            />
            <Input
              label="Amount"
              Icon={
                <MaterialIcons name="outbox" size={32} color={colors.dark} />
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
