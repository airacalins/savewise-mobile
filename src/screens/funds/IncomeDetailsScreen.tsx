import React, { useEffect } from "react";

import { Caption } from "../../components/Typography";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { FlatList, View } from "react-native";
import { OffsetContainer } from "../../components/Container";
import { Screen } from "../../components/Screens/Screen";
import { Separator } from "../../components/Separator/Separator";
import { FundStackProps } from "../../navigation/FundStackNavigator";
import { Button } from "../../components/Buttons/Button";
import {
  SourceDetailsHistory,
  sourceDetailHistoryMockData,
} from "../../data/IncomeDetailsMockData";

export const IncomeDetailsScreenScreen: React.FC<FundStackProps> = ({
  navigation,
}) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ paddingRight: 8 }}>
          <Button
            onPress={() => navigation.navigate("AddIncome")}
            title="Add"
            isValid={true}
            disabled={false}
          />
        </View>
      ),
    });
  }, [navigation]);

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
