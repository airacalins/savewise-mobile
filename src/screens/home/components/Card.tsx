import React from "react";
import { View } from "react-native";

import { Body, Caption, Label, Title } from "../../../components/Typography";
import { defaultStyles } from "../../../layouts/DefaultStyles";
import { HorizontalSpace, VerticalSpace } from "../../../components/Spacer";
import { OffsetContainer } from "../../../components/Container";

interface CardProps {
  LeadingIconComponent: React.ReactNode;
  title: string;
  subtitle: string;
}

export const Card: React.FC<CardProps> = ({
  LeadingIconComponent,
  title,
  subtitle,
}) => {
  return (
    <OffsetContainer padding={16}>
      <View style={defaultStyles.centerHorizontally}>
        {LeadingIconComponent}
        <HorizontalSpace spacer={16} />
        <View>
          <Label>{title}</Label>
          <VerticalSpace spacer={8} />
          <Title>{subtitle}</Title>
        </View>
      </View>
    </OffsetContainer>
  );
};
