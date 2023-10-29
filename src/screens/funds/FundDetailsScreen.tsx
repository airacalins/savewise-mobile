import React from "react";
import {
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";

import { colors } from "../../layouts/Colors";
import { Screen } from "../../components/Screen";
import { Subtitle } from "../../components/Typography";
import { StyleSheet, View } from "react-native";
import { IconButton } from "../../components/Button";
import { Padding } from "../../components/Padding";
import { VerticalSpace } from "../../components/Spacer";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { Details } from "../../components/Details";
import { FundDetailsStackProps } from "../../navigation/types";

export const FundDetailsScreen = ({ navigation }: FundDetailsStackProps) => {
  const handleDelete = () => navigation.goBack();

  const handleEdit = () => navigation.navigate("AllocateFund");

  return (
    <Screen>
      <Padding py={16}>
        <View style={defaultStyles.centerHorizontallyBetween}>
          <Padding pl={16}>
            <Subtitle>Details</Subtitle>
          </Padding>
          <View style={[defaultStyles.centerHorizontally, { paddingRight: 8 }]}>
            <IconButton
              onPress={handleDelete}
              size="S"
              IconComponent={
                <Ionicons
                  name="trash-bin-outline"
                  size={16}
                  color={colors.danger}
                />
              }
            />

            <IconButton
              onPress={handleEdit}
              size="S"
              IconComponent={
                <Octicons name="pencil" size={16} color={colors.info} />
              }
            />
          </View>
        </View>

        <View style={defaultStyles.listTileSeparator} />

        <VerticalSpace spacer={0} />

        <Padding px={8}>
          <Details
            title="Savings for"
            details="Car"
            IconComponent={
              <MaterialCommunityIcons
                name="hand-coin-outline"
                size={32}
                color={colors.dark}
              />
            }
          />

          <Details
            title="Transaction Date"
            details="Dec 21, 2023"
            IconComponent={
              <MaterialCommunityIcons
                name="calendar-blank-outline"
                size={32}
                color="black"
              />
            }
          />

          <Details
            title="Description"
            details="For the car because why not? For the car because why not? For
                  the car because why not?"
            IconComponent={<Entypo name="text" size={32} color={colors.dark} />}
          />

          <Details
            title="Amount"
            details="400.00"
            IconComponent={
              <MaterialIcons name="outbox" size={32} color={colors.dark} />
            }
          />
        </Padding>
      </Padding>
    </Screen>
  );
};

const styles = StyleSheet.create({});
