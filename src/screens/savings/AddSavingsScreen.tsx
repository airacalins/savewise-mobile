import React from "react";
import { AntDesign, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../../layouts/Colors";
import { Screen } from "../../components/Screen";
import { Input } from "../../components/Input";
import { Padding } from "../../components/Padding";
import { View } from "react-native";
import { CustomButton } from "../../components/Button";
import { Subtitle } from "../../components/Typography";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { FundsInputAccessory } from "../funds/components/FundsInputAccessory";
import { FundsStackProps } from "../../navigation/FundStackNavigator";

export const AddSavingsScreen = ({ navigation }: FundsStackProps) => {
  const inputAccessoryViewID = "otherOptions";

  return (
    <>
      <Screen>
        <Padding pl={16} pr={8}>
          <View style={defaultStyles.centerHorizontallyBetween}>
            <Subtitle>Add planned savings</Subtitle>
            <CustomButton
              onPress={() => navigation.navigate("Funds")}
              title="Save"
            />
          </View>
        </Padding>

        <View style={defaultStyles.listTileSeparator} />

        <Padding px={8}>
          <Input
            label="Title"
            Icon={
              <MaterialCommunityIcons
                name="hand-coin-outline"
                size={24}
                color={colors.dark}
              />
            }
            autoFocus
            inputAccessoryViewID={inputAccessoryViewID}
          />
          <Input
            label="Target Amount"
            Icon={<Entypo name="text" size={24} color={colors.dark} />}
            inputAccessoryViewID={inputAccessoryViewID}
          />
        </Padding>

        <FundsInputAccessory nativeID={inputAccessoryViewID} />
      </Screen>
    </>
  );
};
