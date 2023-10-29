import React from "react";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

import { colors } from "../../layouts/Colors";
import { CustomButton } from "../../components/Button";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { Input } from "../../components/Input";
import { Padding } from "../../components/Padding";
import { Screen } from "../../components/Screen";
import { Subtitle } from "../../components/Typography";
import { VerticalSpace } from "../../components/Spacer";
import { View } from "react-native";
import { FundsStackProps } from "../../navigation/types";

export const CashOutScreen = ({ navigation }: FundsStackProps) => {
  const handleSave = () => navigation.goBack();

  return (
    <Screen>
      <Padding py={16}>
        <View style={defaultStyles.centerHorizontallyBetween}>
          <Padding pl={16}>
            <Subtitle>Record a Cash-out</Subtitle>
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
          Icon={<MaterialIcons name="outbox" size={32} color={colors.dark} />}
        />
      </Padding>
    </Screen>
  );
};
