import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { Body, Caption, Subtitle, Title } from "../../components/Typography";
import { colors } from "../../layouts/Colors";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { OffsetContainer } from "../../components/Container";
import { Screen } from "../../components/Screen";
import { VerticalSpace } from "../../components/Spacer";
import { Padding } from "../../components/Padding";

export const ProfileScreen = () => {
  return (
    <Screen>
      <View style={styles.sectionTitle}>
        <Title>Account</Title>
      </View>

      <VerticalSpace spacer={32} />

      <View>
        <Caption style={styles.sectionTitle}>Settings</Caption>
        <VerticalSpace spacer={8} />
        <Padding px={8}>
          <OffsetContainer padding={16}>
            <View style={defaultStyles.centerHorizontallyBetween}>
              <View>
                <Subtitle>Aira Calingasan</Subtitle>
                <VerticalSpace spacer={4} />
                <Body>airacalins@gmail.com</Body>
              </View>
              <AntDesign name="right" size={24} color={colors.dark} />
            </View>
          </OffsetContainer>
        </Padding>
      </View>

      <VerticalSpace spacer={32} />

      <View>
        <Caption style={styles.sectionTitle}>Preferences</Caption>
        <VerticalSpace spacer={8} />
        <Padding px={8}>
          <OffsetContainer padding={16}>
            <View style={defaultStyles.centerHorizontallyBetween}>
              <Subtitle>Notifications</Subtitle>
              <AntDesign name="right" size={24} color={colors.dark} />
            </View>
            <View style={defaultStyles.listTileSeparator} />
            <View style={defaultStyles.centerHorizontallyBetween}>
              <Subtitle>Passcode</Subtitle>
              <AntDesign name="right" size={24} color={colors.dark} />
            </View>
          </OffsetContainer>
        </Padding>
      </View>

      <VerticalSpace spacer={32} />

      <View>
        <Caption style={styles.sectionTitle}>Feedback</Caption>
        <VerticalSpace spacer={8} />
        <Padding px={8}>
          <OffsetContainer padding={16}>
            <View style={defaultStyles.centerHorizontallyBetween}>
              <Subtitle>Rate Splitwise</Subtitle>
              <AntDesign name="right" size={24} color={colors.dark} />
            </View>
            <View style={defaultStyles.listTileSeparator} />
            <View style={defaultStyles.centerHorizontallyBetween}>
              <Subtitle>Contact Us</Subtitle>
              <AntDesign name="right" size={24} color={colors.dark} />
            </View>
          </OffsetContainer>
        </Padding>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    paddingHorizontal: 16,
  },
});
