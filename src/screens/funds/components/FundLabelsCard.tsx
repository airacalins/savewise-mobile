import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import { Button } from "../../../components/Buttons/Button";
import { Subtitle, Title } from "../../../components/Typography";
import { colors } from "../../../layouts/Colors";
import { defaultStyles } from "../../../layouts/DefaultStyles";
import { Fund } from "../../../store/funds/types";
import { FundLabel, FundLabelType } from "../../../store/fundLabels/types";
import { FundLabelFormModal } from "./FundLabelFormModal";
import { FundLabelItem } from "./FundLabelItem";
import { FundsStackParamList } from "../../../navigation/FundStackNavigator";
import { OffsetContainer } from "../../../components/Container";
import { Separator } from "../../../components/Separator/Separator";
import { setSelectedFundLabel } from "../../../store/fundLabels/reducer";
import { useAppDispatch } from "../../../store/hooks";

interface FundLabelsCardProps {
  title: string;
  total: number;
  labels: FundLabel[];
  funds: Fund[];
  onCreateFundLabel: () => void;
}

export const FundLabelsCard: React.FC<FundLabelsCardProps> = ({
  title,
  total,
  labels,
  funds,
  onCreateFundLabel: onCreateNewIncomeLabel,
}) => {
  const navigation = useNavigation<StackNavigationProp<FundsStackParamList>>();
  const dispatch = useAppDispatch();
  const [isAddIncomeModalVisible, setIsAddIncomeModalVisible] = useState(false);
  const [fundLabelType, setFundLabelType] = useState(FundLabelType.Income);

  const handleNavigateToFundDetails = (
    fundLabelName: string,
    fundLabelId: string
  ) => {
    navigation.navigate("FundDetails", { fundLabelName, fundLabelId });
  };

  const handleEditFundLabel = (fundLabel: FundLabel) => {
    setIsAddIncomeModalVisible(true);
    dispatch(setSelectedFundLabel(fundLabel));
  };

  const handleDeleteFundLabel = () => {
    console.log(
      "Are you sure you want to delete this? Deleting it will also delete all files related to the total funds."
    );
  };

  const handleHideFundLabelModal = () => setIsAddIncomeModalVisible(false);

  return (
    <>
      <View style={defaultStyles.centerHorizontallyBetween}>
        <View style={defaultStyles.px8}>
          <Subtitle>{title}</Subtitle>
        </View>
        <Button title="Manage" uppercase onPress={onCreateNewIncomeLabel} />
      </View>
      <OffsetContainer>
        <View style={styles.headerContainer}>
          <Title>₱ {total.toLocaleString()}</Title>
        </View>
        <FlatList
          data={labels}
          keyExtractor={(label) => label.id}
          renderItem={({ item }: { item: FundLabel }) => {
            const fundsByFundLabelId = funds.filter(
              (fund) => fund.fundLabel.id === item.id
            );
            const totalFundsByFundLabel = fundsByFundLabelId.reduce(
              (accumulator, fund) => accumulator + fund.amount,
              0
            );

            return (
              <FundLabelItem
                fundLabel={item}
                totalFundPerLabel={totalFundsByFundLabel}
                onNavigateToDetails={() =>
                  handleNavigateToFundDetails(item.title, item.id)
                }
                onEditFundLabel={() => handleEditFundLabel(item)}
                onDeleteFundLabel={() => handleDeleteFundLabel()}
              />
            );
          }}
          ItemSeparatorComponent={Separator}
          scrollEnabled={false}
        />
      </OffsetContainer>
      <FundLabelFormModal
        label={
          fundLabelType === FundLabelType.Income
            ? "Income Name"
            : "Expense Name"
        }
        fundLabelType={fundLabelType}
        isVisible={isAddIncomeModalVisible}
        onClose={handleHideFundLabelModal}
      />
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.border,
    borderRadius: 8,
    padding: 16,
  },
  swipeableRightActionContainer: {
    flexDirection: "row",
    height: "100%",
    width: "30%",
    ...defaultStyles.center,
  },
  swipeableRightActionItem: {
    ...defaultStyles.center,
    ...defaultStyles.h100,
    ...defaultStyles.flex1,
  },
  item: {
    backgroundColor: colors.background,
    ...defaultStyles.centerHorizontallyBetween,
    ...defaultStyles.px8,
    ...defaultStyles.py16,
  },
});
