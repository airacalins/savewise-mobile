import React from "react";

import { TextButton } from "../../../components/Buttons/TextButton";
import { OffsetContainer } from "../../../components/Container";
import { VerticalSpace } from "../../../components/Spacer";
import { Body } from "../../../components/Typography";

export const EmptyGoalCard = () => {
  return (
    <OffsetContainer padding={16}>
      <Body
        text={
          "Save up for a vacation, a\ncar, or anything else you've\nbeen dreaming of."
        }
      />

      <VerticalSpace spacer={32} />
      <TextButton title="Start a goal" onPress={() => {}} />
    </OffsetContainer>
  );
};
