import React from "react";

import { Caption } from "../../components/Typography";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { FlatList, View } from "react-native";
import { OffsetContainer } from "../../components/Container";
import { Screen } from "../../components/Screens/Screen";
import { Separator } from "../../components/Separator/Separator";

interface SourceDetailsHistory {
  date: Date;
  amount: number;
}

const sourceDetailHistoryMockData: SourceDetailsHistory[] = [
  { date: new Date(2024, 2, 1), amount: 100 },
  { date: new Date(2024, 2, 2), amount: 150 },
  { date: new Date(2024, 2, 3), amount: 200 },
  { date: new Date(2024, 2, 4), amount: 120 },
  { date: new Date(2024, 2, 5), amount: 180 },
  { date: new Date(2024, 2, 6), amount: 220 },
  { date: new Date(2024, 2, 7), amount: 130 },
  { date: new Date(2024, 2, 8), amount: 170 },
  { date: new Date(2024, 2, 9), amount: 190 },
  { date: new Date(2024, 2, 10), amount: 210 },
];

export const IncomeSourceDetailsScreen = () => {
  const renderItem = ({ item }: { item: SourceDetailsHistory }) => (
    <View style={[defaultStyles.centerHorizontallyBetween, defaultStyles.p16]}>
      <Caption>
        {item.date.toLocaleDateString(undefined, {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </Caption>
      <Caption fontWeight="500">PHP {item.amount}</Caption>
    </View>
  );

  return (
    <Screen>
      <OffsetContainer>
        <FlatList
          data={sourceDetailHistoryMockData}
          keyExtractor={(item) => item.date.toString()}
          renderItem={renderItem}
          ItemSeparatorComponent={Separator}
          scrollEnabled={false}
        />
      </OffsetContainer>
    </Screen>
  );
};
