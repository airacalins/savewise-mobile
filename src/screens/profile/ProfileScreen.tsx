import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Screen } from "../../components/Screen";
import {
  Body,
  Caption,
  Header,
  Subtitle,
  Title,
} from "../../components/Typography";
import { VerticalSpace } from "../../components/Spacer";
import { AntDesign } from "@expo/vector-icons";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { OffsetContainer } from "../../components/Container";
import { colors } from "../../layouts/Colors";

export const ProfileScreen = () => {
  return (
    <Screen>
      <View style={{ paddingHorizontal: 16 }}>
        <Title>Account</Title>
      </View>

      <VerticalSpace spacer={32} />

      <View>
        <Caption sx={{ paddingHorizontal: 16 }}>Settings</Caption>
        <VerticalSpace spacer={8} />
        <TouchableOpacity>
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
        </TouchableOpacity>
      </View>

      <VerticalSpace spacer={32} />

      <View>
        <Caption sx={{ paddingHorizontal: 16 }}>Preferences</Caption>
        <VerticalSpace spacer={8} />
        <TouchableOpacity>
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
        </TouchableOpacity>
      </View>

      <VerticalSpace spacer={32} />

      <View>
        <Caption sx={{ paddingHorizontal: 16 }}>Feedback</Caption>
        <VerticalSpace spacer={8} />
        <TouchableOpacity>
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
        </TouchableOpacity>
      </View>
    </Screen>
  );
};
