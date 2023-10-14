import React from "react";
import { Image, View } from "react-native";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { HorizontalSpace, VerticalSpace } from "./Spacer";
import { Body, Subtitle } from "./Typography";

interface ListTileProps {
  title: string;
  subtitle: string;
  LeadingComponent: React.ReactNode;
  TrailingComponent: React.ReactNode;
}

export const ListTile: React.FC<ListTileProps> = ({
  title,
  subtitle,
  LeadingComponent,
  TrailingComponent,
}) => {
  return (
    <>
      <View
        style={[
          defaultStyles.centerHorizontally,
          { justifyContent: "space-between" },
        ]}
      >
        <View style={defaultStyles.centerHorizontally}>
          {LeadingComponent}
          <HorizontalSpace spacer={16} />
          <View>
            <Subtitle>{title}</Subtitle>
            <VerticalSpace spacer={4} />
            <Body>{subtitle}</Body>
          </View>
        </View>
        {TrailingComponent}
      </View>
    </>
  );
};
