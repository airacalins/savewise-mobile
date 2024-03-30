import React from "react";
import { Image, View } from "react-native";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

import { Body, Caption, Title } from "../../components/Typography";
import { colors } from "../../layouts/Colors";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { HorizontalSpace, VerticalSpace } from "../../components/Spacer";
import { OffsetContainer } from "../../components/Container";
import { savingsMockData } from "../../data/SavingsMockData";
import { Screen } from "../../components/Screens/Screen";
import { StyleSheet } from "react-native";

export const SavingsDetailsScreen = () => {
  // TODO
  const saving = savingsMockData[0];

  return (
    <Screen>
      <OffsetContainer>
        <Image source={{ uri: saving.image }} style={styles.cardImage} />
        <View style={defaultStyles.centerHorizontallyBetween}>
          <Title text={saving.title} />
          <View style={defaultStyles.centerHorizontally}>
            <AntDesign name="arrowup" size={16} color={colors.success} />
            <HorizontalSpace spacer={4} />
            <Body
              text={saving.totalSavings}
              style={defaultStyles.fontWeight500}
            />
          </View>
        </View>

        <VerticalSpace spacer={16} />

        <View style={defaultStyles.centerHorizontally}>
          <SimpleLineIcons name="target" size={16} color={colors.dark} />
          <HorizontalSpace spacer={8} />
          <Body text="Target amount:" />
          <Caption
            text={saving.targetSavings}
            style={defaultStyles.fontWeight500}
          />
        </View>

        <VerticalSpace spacer={8} />

        <View style={defaultStyles.centerHorizontally}>
          <AntDesign name="calendar" size={16} color={colors.dark} />
          <HorizontalSpace spacer={8} />
          <Body text="Target date: " />
          <Caption
            text={saving.targetDate}
            style={defaultStyles.fontWeight500}
          />
        </View>
      </OffsetContainer>

      <VerticalSpace spacer={32} />

      {/* <Padding px={16}> */}
      {/* <Funds /> */}
      {/* <Funds /> */}
      {/* </Padding> */}
    </Screen>
  );
};

const styles = StyleSheet.create({
  cardImage: {
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    width: "100%",
  },
});
