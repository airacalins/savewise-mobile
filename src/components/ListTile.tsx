import React from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

import { defaultStyles } from "../layouts/DefaultStyles";
import { HorizontalSpace, VerticalSpace } from "./Spacer";
import { Caption } from "./Typography";
import { colors } from "../layouts/Colors";

interface ListTileProps {
  LeadingComponent?: React.ReactNode;
  IconComponent?: React.ReactNode;
  TitleComponent: React.ReactNode;
  SubtitleComponent?: React.ReactNode;
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
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          defaultStyles.centerHorizontally,
          { backgroundColor: colors.background },
        ]}
      >
        {LeadingComponent}
        {IconComponent}
        <HorizontalSpace spacer={4} />
        <View style={[defaultStyles.centerHorizontallyBetween, { flex: 1 }]}>
          <View style={{ flex: 1 }}>
            {TitleComponent}
            {SubtitleComponent && (
              <>
                <VerticalSpace spacer={4} />
                {SubtitleComponent}
              </>
            )}
          </View>
          {TrailingComponent}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
