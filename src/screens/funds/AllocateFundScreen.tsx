import React from "react";
import { Entypo, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

import { colors } from "../../layouts/Colors";
import { CustomButton } from "../../components/Button";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { FundsInputAccessory } from "./components/FundsInputAccessory";
import { Input } from "../../components/Input";
import { Padding } from "../../components/Padding";
import { Screen } from "../../components/Screen";
import { Subtitle } from "../../components/Typography";
import { ScrollView, StyleSheet, View } from "react-native";
import { FundsStackProps } from "../../navigation/FundStackNavigator";

export const AllocateFundScreen = ({ navigation }: FundsStackProps) => {
  const inputAccessoryViewID = "otherOptions";

  const handleSave = () => navigation.goBack();

  return (
    <>
      <Screen>
        <Padding py={16}>
          <Padding pl={16} pr={8}>
            <View style={defaultStyles.centerHorizontallyBetween}>
              <Subtitle>Allocate Fund</Subtitle>
              <CustomButton title="Save" onPress={handleSave} />
            </View>
          </Padding>

          <View style={defaultStyles.listTileSeparator} />

          <ScrollView style={styles.container}>
            <Input
              Icon={<FontAwesome5 name="boxes" size={24} color={colors.dark} />}
            />
            <Input
              label="Description"
              Icon={<Entypo name="text" size={24} color={colors.dark} />}
              returnKeyType="next"
              inputAccessoryViewID={inputAccessoryViewID}
            />
            <Input
              label="Amount"
              Icon={
                <MaterialIcons name="outbox" size={32} color={colors.dark} />
              }
              keyboardType="numeric"
              returnKeyType="next"
              inputAccessoryViewID={inputAccessoryViewID}
            />
          </ScrollView>
        </Padding>
      </Screen>

      <FundsInputAccessory nativeID={inputAccessoryViewID} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    height: "100%",
  },
});
