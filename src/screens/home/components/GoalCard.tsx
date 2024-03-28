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
      <Body fontWeight="500" color={colors.white}>
        {title}
      </Body>
      <VerticalSpace spacer={8} />
      <Caption color={colors.white}>Every 2nd of the month</Caption>
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
        <Body fontWeight="400" color={colors.white}>
          {percentage}
        </Body>
        <Body fontWeight="500" color={colors.white}>
          PHP {Math.abs(targetAmount)}
        </Body>
      </View>
    </OffsetContainer>
  );
};
