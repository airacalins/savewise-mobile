import React from "react";
import { View } from "react-native";
import * as Progress from "react-native-progress";

import { OffsetContainer } from "../../../components/Container";
import { VerticalSpace } from "../../../components/Spacer";
import { Body, Caption } from "../../../components/Typography";
import { colors } from "../../../layouts/Colors";
import { defaultStyles } from "../../../layouts/DefaultStyles";

interface GoalCardProps {
  title: string;
  percent: number;
  currentAmount: number;
  targetAmount: number;
}

export const GoalCard: React.FC<GoalCardProps> = ({
  title,
  percent,
  currentAmount,
  targetAmount,
}) => {
  const progressPercentage = ((currentAmount / targetAmount) * 100) / 100;
  const percentage = `${(currentAmount / targetAmount) * 100} %`;

  return (
    <OffsetContainer padding={16} backgroundColor={colors.dark}>
      <Body text={title} fontWeight="500" color={colors.white} />
      <VerticalSpace spacer={8} />
      <Caption text="Every 2nd of the month" color={colors.white} />
      <VerticalSpace spacer={16} />
      <Progress.Bar
        borderWidth={0}
        color={colors.white}
        height={8}
        progress={progressPercentage}
        unfilledColor="rgba(0, 191, 154, 0.1)"
        width={null}
      />
      <VerticalSpace spacer={16} />
      <View style={defaultStyles.centerHorizontallyBetween}>
        <Body text={percentage} fontWeight="400" color={colors.white} />
        <Body
          text={`PHP ${Math.abs(targetAmount)}`}
          fontWeight="500"
          color={colors.white}
        />
      </View>
    </OffsetContainer>
  );
};
