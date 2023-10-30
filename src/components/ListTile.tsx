import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { defaultStyles } from "../layouts/DefaultStyles";
import { HorizontalSpace, VerticalSpace } from "./Spacer";

interface ListTileProps {
  LeadingComponent: React.ReactNode;
  IconComponent?: React.ReactNode;
  TitleComponent: React.ReactNode;
  SubtitleComponent: React.ReactNode;
  TrailingComponent: React.ReactNode;
  onPress: () => void;
}

export const ListTile: React.FC<ListTileProps> = ({
  LeadingComponent,
  IconComponent,
  TitleComponent,
  SubtitleComponent,
  TrailingComponent,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={defaultStyles.centerHorizontally}
    >
      {LeadingComponent}
      {IconComponent}
      <HorizontalSpace spacer={4} />
      <View style={[defaultStyles.centerHorizontallyBetween, { flex: 1 }]}>
        <View style={{ flex: 1 }}>
          {TitleComponent}
          <VerticalSpace spacer={4} />
          {SubtitleComponent}
        </View>
        {TrailingComponent}
      </View>
    </TouchableOpacity>
  );
};
