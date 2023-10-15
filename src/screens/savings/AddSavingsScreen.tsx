import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../../layouts/Colors";
import { Screen } from "../../components/Screen";
import { TextField } from "../../components/Input";

export const AddSavingsScreen: React.FC = () => {
  return (
    <Screen>
      <TextField
        label="Title"
        Icon={
          <MaterialCommunityIcons
            name="hand-coin-outline"
            size={24}
            color={colors.dark}
          />
        }
      />
      <TextField
        label="Target Amount"
        Icon={<Entypo name="text" size={24} color={colors.dark} />}
      />
      <TextField
        label="Target Date"
        Icon={<AntDesign name="calendar" size={24} color={colors.dark} />}
      />
    </Screen>
  );
};
