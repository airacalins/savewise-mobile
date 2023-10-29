import React from "react";
import { InputAccessoryView, View } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../../../layouts/Colors";
import { OffsetContainer } from "../../../components/Container";
import { defaultStyles } from "../../../layouts/DefaultStyles";

interface FundsInputAccessoryProps {
  nativeID: string;
}

export const FundsInputAccessory: React.FC<FundsInputAccessoryProps> = ({
  nativeID,
}) => {
  return (
    <InputAccessoryView nativeID={nativeID}>
      <OffsetContainer padding={16}>
        <View style={defaultStyles.centerHorizontallyBetween}>
          <MaterialCommunityIcons
            name="calendar-blank-outline"
            size={24}
            color={colors.dark}
          />
          <Feather name="camera" size={24} color={colors.dark} />
        </View>
      </OffsetContainer>
    </InputAccessoryView>
  );
};
