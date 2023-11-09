import React from "react";
import { View } from "react-native";

import { Caption, Title } from "../../../components/Typography";
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
    <OffsetContainer>
      <View style={[defaultStyles.centerHorizontally, { padding: 16 }]}>
        {LeadingIconComponent}
        <HorizontalSpace spacer={16} />
        <View>
          <Caption>{title}</Caption>
          <VerticalSpace spacer={8} />
          <Title>{subtitle}</Title>
        </View>
      </View>
    </OffsetContainer>
  );
};
