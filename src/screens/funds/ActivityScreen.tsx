import React from "react";
import { ScrollView, View } from "react-native";

import { colors } from "../../layouts/Colors";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { Funds } from "./components/Funds";
import { Label } from "../../components/Typography";
import { ListTitle } from "../../components/Items/ListTitle";
import { useAppSelector } from "../../store/hooks";
import { VerticalSpace } from "../../components/Spacer";

export const ActivityScreen = () => {
  const { isFetching, funds } = useAppSelector((state) => state.fund);

  return (
    <ScrollView>
      <View style={defaultStyles.p8}>
        <ListTitle title="Recent Activity" />
        <VerticalSpace spacer={16} />
        <Funds funds={funds} />
        <VerticalSpace spacer={16} />
        <Label
          text="- End of funds -"
          color={colors.grey}
          style={defaultStyles.textCenter}
        />
      </View>
    </ScrollView>
  );
};
