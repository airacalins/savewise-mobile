import React, { useEffect } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Button } from "../../../components/Buttons/Button";
import { Caption, Subtitle, Title } from "../../../components/Typography";
import { colors } from "../../../layouts/Colors";
import { defaultStyles } from "../../../layouts/DefaultStyles";
import { HorizontalSpace } from "../../../components/Spacer";
import { OffsetContainer } from "../../../components/Container";
import { Separator } from "../../../components/Separator/Separator";
import { FundLabel } from "../../../store/fundLabels/types";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { FundsStackParamList } from "../../../navigation/FundStackNavigator";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  fetchFunds,
  fetchFundsByFundLabelId,
} from "../../../store/funds/action";

interface FundLabelsCardProps {
  title: string;
  labels: FundLabel[];
  onCreateFundLabel: () => void;
}

export const FundLabelsCard: React.FC<FundLabelsCardProps> = ({
  title,
  labels,
  onCreateFundLabel: onCreateNewIncomeLabel,
}) => {
  const navigation = useNavigation<StackNavigationProp<FundsStackParamList>>();
  const dispatch = useAppDispatch();
  const { isFetching, funds } = useAppSelector((state) => state.fund);

  // const totalFundsPerLabel = (fundLabelId: string) => {
  //   dispatch(fetchFundsByFundLabelId(fundLabelId));
  //   if (!isFetching)
  //     return funds.reduce((accumulator, fund) => accumulator + fund.amount, 0);
  // };

  const handleNavigateToFundDetails = (
    fundLabelName: string,
    fundLabelId: string
  ) => {
    navigation.navigate("FundDetails", { fundLabelName, fundLabelId });
  };

  const renderItem = ({ item }: { item: FundLabel }) => (
    <TouchableOpacity
      onPress={() => handleNavigateToFundDetails(item.title, item.id)}
      style={styles.item}
    >
      <Caption>{item.title}</Caption>
      <View style={defaultStyles.centerHorizontally}>
        <Caption fontWeight="500">PHP {1000}</Caption>
        <HorizontalSpace spacer={8} />
        <MaterialCommunityIcons
          name="greater-than"
          size={16}
          color={colors.success}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <View style={defaultStyles.centerHorizontallyBetween}>
        <View style={defaultStyles.px8}>
          <Subtitle>{title}</Subtitle>
        </View>
        <Button
          title="Manage"
          uppercase
          isValid={true}
          onPress={onCreateNewIncomeLabel}
        />
      </View>

      <OffsetContainer>
        <View style={styles.headerContainer}>
          <Title>₱ {1000}</Title>
        </View>

        <FlatList
          data={labels}
          keyExtractor={(label) => label.id}
          renderItem={renderItem}
          ItemSeparatorComponent={Separator}
          scrollEnabled={false}
        />
      </OffsetContainer>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.border,
    borderRadius: 8,
    padding: 16,
  },
  item: {
    ...defaultStyles.centerHorizontallyBetween,
    ...defaultStyles.px8,
    ...defaultStyles.py16,
  },
});
