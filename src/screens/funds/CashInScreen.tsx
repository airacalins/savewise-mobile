import React from "react";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

import { colors } from "../../layouts/Colors";
import { Input } from "../../components/Input";
import { Screen } from "../../components/Screen";
import { Subtitle } from "../../components/Typography";
import { View } from "react-native";
import { VerticalSpace } from "../../components/Spacer";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { Padding } from "../../components/Padding";
import { CustomButton } from "../../components/Button";
import { FundsStackProps } from "../../navigation/types";

export const CashInScreen = ({ navigation }: FundsStackProps) => {
  const handleSave = () => navigation.goBack();

  return (
    <Screen>
      <Padding py={16}>
        <View style={defaultStyles.centerHorizontallyBetween}>
          <Padding pl={16}>
            <Subtitle>Record a Cash-in</Subtitle>
          </Padding>
          <CustomButton onPress={handleSave} title="Save" />
        </View>

        <View style={defaultStyles.listTileSeparator} />

        <VerticalSpace spacer={16} />

        <Input
          label="Description"
          Icon={<Entypo name="text" size={24} color={colors.dark} />}
        />
        <Input
          label="Amount"
          Icon={
            <MaterialIcons name="move-to-inbox" size={32} color={colors.dark} />
          }
        />
      </Padding>
    </Screen>
  );
};
