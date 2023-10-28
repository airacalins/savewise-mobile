import React from "react";
import { Image, View } from "react-native";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

import { Body, Caption, Title } from "../../components/Typography";
import { colors } from "../../layouts/Colors";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { HorizontalSpace, VerticalSpace } from "../../components/Spacer";
import { OffsetContainer } from "../../components/Container";
import { savingsMockData } from "../../data/SavingsMockData";
import { Screen } from "../../components/Screen";
import { Transaction } from "./components/Transaction";
import { StyleSheet } from "react-native";
import { Padding } from "../../components/Padding";

export const SavingsDetailsScreen = () => {
  // TODO
  const saving = savingsMockData[0];

  return (
    <Screen>
      <OffsetContainer>
        <Image
          // TODO
          source={{ uri: saving.image }}
          style={styles.cardImage}
        />
        <Padding p={16}>
          <View style={defaultStyles.centerHorizontallyBetween}>
            <Title>{saving.title}</Title>
            <View style={defaultStyles.centerHorizontally}>
              <AntDesign name="arrowup" size={16} color={colors.success} />
              <HorizontalSpace spacer={4} />
              {/* TODO */}
              <Body style={defaultStyles.fontWeight500}>
                {saving.totalSavings}
              </Body>
            </View>
          </View>

          <VerticalSpace spacer={16} />

          <View style={defaultStyles.centerHorizontally}>
            <SimpleLineIcons name="target" size={16} color={colors.dark} />
            <HorizontalSpace spacer={8} />
            <Body>Target amount: </Body>
            <Caption style={defaultStyles.fontWeight500}>
              {/* TODO */}
              {saving.targetSavings}
            </Caption>
          </View>

          <VerticalSpace spacer={8} />

          <View style={defaultStyles.centerHorizontally}>
            <AntDesign name="calendar" size={16} color={colors.dark} />
            <HorizontalSpace spacer={8} />
            <Body>Target date: </Body>
            {/* TODO */}
            <Caption style={defaultStyles.fontWeight500}>
              {saving.targetDate}
            </Caption>
          </View>
        </Padding>
      </OffsetContainer>

      <Padding p={16}>
        <Caption style={defaultStyles.fontWeight500}>December 2023</Caption>
        <VerticalSpace spacer={16} />
        <Transaction />
        <Caption style={defaultStyles.fontWeight500}>November 2023</Caption>
        <VerticalSpace spacer={16} />
        <Transaction />
      </Padding>
    </Screen>
  );
};

const styles = StyleSheet.create({
  cardImage: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});
