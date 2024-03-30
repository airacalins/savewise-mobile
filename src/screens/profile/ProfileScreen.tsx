import React from "react";
import { StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { Body, Caption, Subtitle, Title } from "../../components/Typography";
import { colors } from "../../layouts/Colors";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { ListTile } from "../../components/ListTile";
import { OffsetContainer } from "../../components/Container";
import { ProfileStackProps } from "../../navigation/ProfileStackNavigator";
import { Screen } from "../../components/Screens/Screen";
import { VerticalSpace } from "../../components/Spacer";

export const ProfileScreen = ({ navigation }: ProfileStackProps) => {
  const GreaterThanIcon = (
    <AntDesign name="right" size={24} color={colors.dark} />
  );

  return (
    <Screen>
      <View style={styles.sectionTitle}>
        <Title text="Account" />
      </View>

      <VerticalSpace spacer={32} />

      <View>
        <Caption text="Settings" style={styles.sectionTitle} />
        <VerticalSpace spacer={8} />
        <OffsetContainer padding={16}>
          <ListTile
            TitleComponent={<Subtitle text="Aira Calingasan" />}
            SubtitleComponent={<Body text="airacalins@gmail.com" />}
            TrailingComponent={GreaterThanIcon}
            onPress={() => navigation.navigate("Settings")}
          />
        </OffsetContainer>
      </View>

      <VerticalSpace spacer={32} />

      <View>
        <Caption text="Preferences" style={styles.sectionTitle} />
        <VerticalSpace spacer={8} />
        <OffsetContainer padding={16}>
          <ListTile
            TitleComponent={<Subtitle text="Notifications" />}
            TrailingComponent={GreaterThanIcon}
            onPress={() => navigation.navigate("Notifications")}
          />
          <View style={defaultStyles.listTileSeparator} />
          <ListTile
            TitleComponent={<Subtitle text="Passcode" />}
            TrailingComponent={GreaterThanIcon}
            onPress={() => navigation.navigate("Passcode")}
          />
        </OffsetContainer>
      </View>

      <VerticalSpace spacer={32} />

      <View>
        <Caption text="Feedback" style={styles.sectionTitle} />
        <VerticalSpace spacer={8} />
        <View style={defaultStyles.px8}>
          <OffsetContainer padding={16}>
            <ListTile
              TitleComponent={<Subtitle text="Rate Savewise" />}
              TrailingComponent={GreaterThanIcon}
              onPress={() => navigation.navigate("RateUs")}
            />
            <View style={defaultStyles.listTileSeparator} />
            <ListTile
              TitleComponent={<Subtitle text="Contact Us" />}
              TrailingComponent={GreaterThanIcon}
              onPress={() => navigation.navigate("ContactUs")}
            />
          </OffsetContainer>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    paddingHorizontal: 16,
  },
});
