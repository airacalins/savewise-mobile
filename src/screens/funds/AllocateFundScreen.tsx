import React from "react";
import { Entypo, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

import { colors } from "../../layouts/Colors";
import { CustomButton } from "../../components/Button";
import { FundsInputAccessory } from "../../components/InputAccessory";
import { FundsStackProps } from "../../navigation/FundStackNavigator";
import { Input } from "../../components/Input";
import { Screen } from "../../components/Screen";
import { ScrollView, StyleSheet } from "react-native";

export const AllocateFundScreen = ({ navigation }: FundsStackProps) => {
  const inputAccessoryViewID = "otherOptions";

  const handleSave = () => navigation.goBack();

  return (
    <>
      <Screen
        title="Allocate Fund"
        HeaderRightComponent={
          <CustomButton title="Save" onPress={handleSave} />
        }
      >
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
            Icon={<MaterialIcons name="outbox" size={32} color={colors.dark} />}
            keyboardType="numeric"
            returnKeyType="next"
            inputAccessoryViewID={inputAccessoryViewID}
          />
        </ScrollView>
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
