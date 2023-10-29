import React from "react";
import { AntDesign, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../../layouts/Colors";
import { Screen } from "../../components/Screen";
import { Input } from "../../components/Input";

export const AddSavingsScreen: React.FC = () => {
  return (
    <Screen>
      <Input
        label="Title"
        Icon={
          <MaterialCommunityIcons
            name="hand-coin-outline"
            size={24}
            color={colors.dark}
          />
        }
      />
      <Input
        label="Target Amount"
        Icon={<Entypo name="text" size={24} color={colors.dark} />}
      />
      <Input
        label="Target Date"
        Icon={<AntDesign name="calendar" size={24} color={colors.dark} />}
      />
    </Screen>
  );
};
