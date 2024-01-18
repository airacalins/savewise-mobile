import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import { Caption, Header } from "../../components/Typography";
import { Screen } from "../../components/Screen";
import { OffsetContainer } from "../../components/Container";
import { VerticalSpace } from "../../components/Spacer";
import { Padding } from "../../components/Padding";
import { MonthlyTransactions } from "../savings/components/MonthlyTransactions";
import { colors } from "../../layouts/Colors";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { IconButton } from "../../components/Button";
import { FundsStackProps } from "../../navigation/FundStackNavigator";
import agent from "../../api/agent";
import { Fund } from "../../types/fund";

export const FundsScreen = ({ navigation }: FundsStackProps) => {
  const [funds, setFunds] = useState<Fund[]>([]);
  const handleNavigateToCashInScreen = () => navigation.navigate("CashIn");
  const handleNavigateToAllocateFundScreen = () =>
    navigation.navigate("AllocateFund");
  const handleNavigateToCashOutScreen = () => navigation.navigate("CashOut");
  const handleNavigateToFundDetailsScreen = () => navigation.navigate("Funds");

  useEffect(() => {
    agent.Funds.list().then((data) => setFunds(data));
  }, []);

  return (
    <Screen>
      <Padding px={8}>
        <OffsetContainer padding={16}>
          <View style={defaultStyles.centerHorizontallyBetween}>
            <View>
              <Caption>Total Funds</Caption>
              <VerticalSpace spacer={8} />
              <Header>₱ 420,000.00</Header>
            </View>

            <TouchableOpacity onPress={handleNavigateToCashInScreen}>
              <MaterialIcons
                name="move-to-inbox"
                size={32}
                color={colors.success}
              />
            </TouchableOpacity>
          </View>
        </OffsetContainer>

        <VerticalSpace spacer={16} />

        <View style={defaultStyles.centerHorizontally}>
          <View style={styles.iconContainer}>
            <IconButton
              onPress={handleNavigateToAllocateFundScreen}
              title="Allocate"
              IconComponent={
                <MaterialCommunityIcons
                  name="hand-coin-outline"
                  size={24}
                  color={colors.info}
                />
              }
            />
          </View>

          <View style={styles.iconContainer}>
            <IconButton
              onPress={handleNavigateToCashOutScreen}
              title="Cash out"
              IconComponent={
                <MaterialIcons name="outbox" size={24} color={colors.danger} />
              }
            />
          </View>
        </View>

        <VerticalSpace spacer={16} />

        <Padding p={16}>
          <MonthlyTransactions monthlyTransactions={funds} />
        </Padding>
      </Padding>
    </Screen>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
  },
});
