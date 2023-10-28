import React from "react";
import { StyleSheet, Text } from "react-native";

import { Caption, Header } from "../../components/Typography";
import { Screen } from "../../components/Screen";
import { OffsetContainer } from "../../components/Container";
import { VerticalSpace } from "../../components/Spacer";

export const FundsScreen = () => {
  return (
    <Screen>
      <OffsetContainer padding={16}>
        <Caption>Total Funds</Caption>
        <VerticalSpace spacer={8} />
        <Header>₱ 420,000.00</Header>
      </OffsetContainer>
    </Screen>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 16,
  },
});
