import React from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Button } from "../../../components/Buttons/Button";
import { Caption, Subtitle, Title } from "../../../components/Typography";
import { colors } from "../../../layouts/Colors";
import { defaultStyles } from "../../../layouts/DefaultStyles";
import { HorizontalSpace } from "../../../components/Spacer";
import { IncomeSource } from "../FundsScreen";
import { OffsetContainer } from "../../../components/Container";
import { Separator } from "../../../components/Separator/Separator";

interface MonthlyDetailsCardProps {
  title: string;
  incomeSources: IncomeSource[];
  onShowIncomeSourcesActionModal: () => void;
  onNavigateToIncomeSourceDetailsScreen: () => void;
}

export const MonthlyDetailsCard: React.FC<MonthlyDetailsCardProps> = ({
  title,
  incomeSources,
  onShowIncomeSourcesActionModal,
  onNavigateToIncomeSourceDetailsScreen,
}) => {
  const renderItem = ({ item }: { item: IncomeSource }) => (
    <TouchableOpacity
      onPress={onNavigateToIncomeSourceDetailsScreen}
      style={styles.item}
    >
      <Caption>{item.title}</Caption>
      <View style={defaultStyles.centerHorizontally}>
        <Caption fontWeight="500">
          PHP {Math.abs(item.amount).toLocaleString()}
        </Caption>
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
          onPress={onShowIncomeSourcesActionModal}
        />
      </View>

      <OffsetContainer>
        <View style={styles.headerContainer}>
          <Title>₱ {1000}</Title>
        </View>

        <FlatList
          data={incomeSources}
          keyExtractor={(item) => item.title}
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
