import React from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { InputAccessoryView, TouchableOpacity, View } from "react-native";
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
          <TouchableOpacity style={defaultStyles.centerAlignHorizontally}>
            <MaterialCommunityIcons
              name="calendar-blank-outline"
              size={24}
              color={colors.dark}
            />
            <RNDateTimePicker value={new Date()} mode="date" />
          </TouchableOpacity>
          <Feather name="camera" size={24} color={colors.dark} />
        </View>
      </OffsetContainer>
    </InputAccessoryView>
  );
};
