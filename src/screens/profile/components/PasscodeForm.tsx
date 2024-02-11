import React from "react";
import { StyleSheet, View } from "react-native";

import { Body } from "../../../components/Typography";
import { CustomButton } from "../../../components/Button";
import { defaultStyles } from "../../../layouts/DefaultStyles";
import { Input } from "../../../components/Input";
import { VerticalSpace } from "../../../components/Spacer";

export const PasscodeForm = () => (
  <>
    <Body style={{ paddingLeft: 8 }}>Enter your 4-digits password</Body>
    <VerticalSpace spacer={8} />
    <View style={defaultStyles.row}>
      <View style={styles.input}>
        <Input keyboardType="numeric" textAlign="center" />
      </View>
      <View style={styles.input}>
        <Input keyboardType="numeric" textAlign="center" />
      </View>
      <View style={styles.input}>
        <Input keyboardType="numeric" textAlign="center" />
      </View>
      <View style={styles.input}>
        <Input keyboardType="numeric" textAlign="center" />
      </View>
    </View>
    <CustomButton size="M" bgColor="dark" title="Submit" />
  </>
);

const styles = StyleSheet.create({
  label: {
    paddingHorizontal: 8,
  },
  input: {
    width: "25%",
  },
});
