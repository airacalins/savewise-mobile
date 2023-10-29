import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "../../layouts/Colors";
import { Input } from "../../components/Input";
import { Screen } from "../../components/Screen";
import { Subtitle } from "../../components/Typography";

export const FundDetailsScreen = () => {
  return (
    <Screen>
      <Subtitle>Fund Details</Subtitle>
      <Input
        label="Amount"
        Icon={
          <MaterialIcons
            name="move-to-inbox"
            size={32}
            color={colors.success}
          />
        }
      />
    </Screen>
  );
};
