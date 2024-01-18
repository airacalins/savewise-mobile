import React from "react";
import { Feather } from "@expo/vector-icons";
import { InputAccessoryView, View } from "react-native";

import { colors } from "../layouts/Colors";
import { defaultStyles } from "../layouts/DefaultStyles";
import { OffsetContainer } from "./Container";

interface InputAccessoryProps {
  nativeID: string;
  LeadingComponent: React.ReactNode;
}

export const InputAccessory: React.FC<InputAccessoryProps> = ({
  nativeID,
  LeadingComponent,
}) => {
  return (
    <InputAccessoryView nativeID={nativeID}>
      <OffsetContainer padding={16}>
        <View style={defaultStyles.centerHorizontallyBetween}>
          {LeadingComponent}
          <Feather name="camera" size={24} color={colors.dark} />
        </View>
      </OffsetContainer>
    </InputAccessoryView>
  );
};
