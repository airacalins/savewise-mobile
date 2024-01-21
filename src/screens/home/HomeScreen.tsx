import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView, StyleSheet, View } from "react-native";

import { Banner } from "./components/Banner";
import { Card } from "./components/Card";
import { colors } from "../../layouts/Colors";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Padding } from "../../components/Padding";
import { SavingsList } from "./components/SavingsList";
import { savingsMockData } from "../../data/SavingsMockData";
import { Screen } from "../../components/Screens/Screen";
import { VerticalSpace } from "../../components/Spacer";

export const HomeScreen: React.FC = () => {
  const personalSavings = savingsMockData.filter((saving) => !saving.shared);
  const sharedSavings = savingsMockData.filter((saving) => saving.shared);

  return (
    <Screen
      children={
        <ScrollView showsVerticalScrollIndicator={false}>
          <Banner
            image="https://cdn.pixabay.com/photo/2016/12/19/21/36/woman-1919143_1280.jpg"
            name="Aira"
          />

          <VerticalSpace spacer={16} />

          <Padding px={8}>
            <View style={defaultStyles.centerHorizontally}>
              <View style={styles.card}>
                <Card
                  title="Total Savings"
                  subtitle="₱100,000"
                  LeadingIconComponent={
                    <MaterialCommunityIcons
                      name="hand-coin-outline"
                      size={24}
                      color={colors.info}
                    />
                  }
                />
              </View>
              <View style={styles.card}>
                <Card
                  title="Last month"
                  subtitle="₱100,000"
                  LeadingIconComponent={
                    <AntDesign
                      name="arrowup"
                      size={24}
                      color={colors.success}
                    />
                  }
                />
              </View>
            </View>
          </Padding>

          <VerticalSpace spacer={16} />

          <VerticalSpace spacer={16} />
          <SavingsList title="Personal" data={personalSavings} />
          <VerticalSpace spacer={32} />
          <SavingsList title="Shared" data={sharedSavings} />
          <VerticalSpace spacer={16} />
        </ScrollView>
      }
    />
  );
};

const styles = StyleSheet.create({
  card: {
    width: "50%",
  },
  tileImage: {
    width: 50,
    height: 50,
    borderRadius: 2,
  },
});
