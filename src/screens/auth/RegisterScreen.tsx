import React, { useState } from "react";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import { AuthStackProps } from "../../navigation/AuthStackNavigator";
import { Body, Header } from "../../components/Typography";
import { colors } from "../../layouts/Colors";
import { CustomButton } from "../../components/Button";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { Input } from "../../components/Input";
import { Screen } from "../../components/Screen";
import { VerticalSpace, HorizontalSpace } from "../../components/Spacer";

export const RegisterScreen = ({ navigation }: AuthStackProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <Screen>
      <View style={defaultStyles.centerHorizontally}>
        <VerticalSpace spacer={32} />
        <Header>Savewise</Header>
        <VerticalSpace spacer={32} />
      </View>

      <View style={styles.formContainer}>
        <View>
          <Input
            label="First Name"
            Icon={<AntDesign name="user" size={24} color={colors.dark} />}
          />
          <Input
            label="Last Name"
            Icon={<AntDesign name="user" size={24} color={colors.dark} />}
          />
          <Input
            label="Email"
            Icon={<AntDesign name="mail" size={24} color={colors.dark} />}
          />
          <Input
            label="Password"
            secureTextEntry={isPasswordVisible ? false : true}
            Icon={
              <Ionicons
                name="lock-closed-outline"
                size={24}
                color={colors.dark}
              />
            }
            TrailingIcon={
              <TouchableOpacity
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                <Feather
                  name={isPasswordVisible ? "eye" : "eye-off"}
                  size={16}
                  color={colors.grey}
                />
              </TouchableOpacity>
            }
          />
        </View>

        <View style={defaultStyles.fullWidth}>
          <CustomButton title="Register" size="M" bgColor="dark" />
        </View>

        <VerticalSpace spacer={16} />

        <View style={[defaultStyles.center, defaultStyles.row]}>
          <Body>Already have an account?</Body>
          <HorizontalSpace spacer={4} />
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Body style={(defaultStyles.textInfo, defaultStyles.fontWeight500)}>
              Login
            </Body>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    paddingHorizontal: 8,
  },
});
