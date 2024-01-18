import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";

import { colors } from "../layouts/Colors";
import { defaultStyles } from "../layouts/DefaultStyles";
import { HorizontalSpace, VerticalSpace } from "./Spacer";

interface ListTileProps {
  LeadingComponent?: React.ReactNode;
  IconComponent?: React.ReactNode;
  TitleComponent: React.ReactNode;
  SubtitleComponent?: React.ReactNode;
  TrailingComponent: React.ReactNode;
  verticalPadding?: number;
  onPress: () => void;
}

export const ListTile: React.FC<ListTileProps> = ({
  LeadingComponent,
  IconComponent,
  TitleComponent,
  SubtitleComponent,
  TrailingComponent,
  verticalPadding,
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          defaultStyles.centerHorizontally,
          {
            backgroundColor: colors.background,
            paddingVertical: verticalPadding,
          },
        ]}
      >
        {LeadingComponent}
        {IconComponent}
        <HorizontalSpace spacer={4} />
        <View
          style={[defaultStyles.centerHorizontallyBetween, defaultStyles.flex1]}
        >
          <View style={defaultStyles.flex1}>
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
