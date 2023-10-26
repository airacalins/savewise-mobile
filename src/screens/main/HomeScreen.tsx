import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { Screen } from "../../components/Screen";
import { VerticalSpace } from "../../components/Spacer";
import { colors } from "../../layouts/Colors";
import { SavingsList } from "./components/SavingsList";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Banner } from "./components/Banner";
import { Card } from "./components/Card";
import { savings } from "../../data/MockData";

interface HomeScreenProps {
  navigation: any;
}

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  const personalSavings = savings.filter((saving) => !saving.shared);
  const sharedSavings = savings.filter((saving) => saving.shared);

  return (
    <Screen
      children={
        <View style={{ paddingBottom: 200 }}>
          <Banner
            image="https://cdn.pixabay.com/photo/2016/12/19/21/36/woman-1919143_1280.jpg"
            name="Aira"
          />

          <VerticalSpace spacer={16} />

          <View style={defaultStyles.centerHorizontally}>
            <View style={styles.card}>
              <Card
                title="Total Savings"
                subtitle="₱100,000"
                LeadingIcon={
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
                LeadingIcon={
                  <AntDesign name="arrowup" size={24} color={colors.success} />
                }
              />
            </View>
          </View>

          <VerticalSpace spacer={16} />

          <ScrollView showsVerticalScrollIndicator={false}>
            <VerticalSpace spacer={16} />
            <SavingsList title="Personal" data={personalSavings} />
            <VerticalSpace spacer={16} />
            <SavingsList title="Shared" data={sharedSavings} />
            <VerticalSpace spacer={16} />
          </ScrollView>
        </View>
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
