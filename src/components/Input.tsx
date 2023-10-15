import React from "react";
import { Body } from "./Typography";
import { TextInput, View } from "react-native";
import { OffsetContainer } from "./Container";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { HorizontalSpace } from "./Spacer";
import { colors } from "../layouts/Colors";

interface TextFieldProps {
  label: string;
  Icon: React.ReactNode;
}

export const TextField: React.FC<TextFieldProps> = ({ label, Icon }) => {
  return (
    <View style={{ paddingBottom: 24 }}>
      <Body sx={{ paddingHorizontal: 16 }}>{label}</Body>
      <OffsetContainer>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              height: 50,
              width: 50,
              alignItems: "center",
              justifyContent: "center",
              borderColor: colors.border,
              borderWidth: 1,
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
            }}
          >
            {Icon}
          </View>
          <HorizontalSpace spacer={4} />
          <TextInput
            style={{ height: 50, padding: 10, width: "100%" }}
            onChangeText={() => {}}
          />
        </View>
      </OffsetContainer>
    </View>
  );
};
