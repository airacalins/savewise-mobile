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

export interface Savings {
  id: string;
  image?: string;
  title: string;
  targetDate?: string;
  targetSavings?: number;
  totalSavings: number;
}

// TODO: Removed when backend is ready
const savings: Savings[] = [
  {
    id: "1",
    image: "https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930_1280.jpg",
    title: "Car",
    targetDate: new Date().toString(),
    targetSavings: 500000,
    totalSavings: 500000,
  },
  {
    id: "2",
    image:
      "https://cdn.pixabay.com/photo/2015/12/15/06/42/kids-1093758_1280.jpg",
    title: "Tuition Fee",
    targetDate: new Date().toString(),
    targetSavings: 45000,
    totalSavings: 3000,
  },
  {
    id: "3",
    image:
      "https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796_1280.jpg",
    title: "House",
    targetDate: new Date().toString(),
    targetSavings: 500,
    totalSavings: 100000,
  },
  {
    id: "5",
    image: "https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930_1280.jpg",
    title: "Car",
    targetDate: new Date().toString(),
    targetSavings: 500000,
    totalSavings: 500000,
  },
  {
    id: "6",
    image:
      "https://cdn.pixabay.com/photo/2015/12/15/06/42/kids-1093758_1280.jpg",
    title: "Tuition Fee",
    targetDate: new Date().toString(),
    targetSavings: 45000,
    totalSavings: 3000,
  },
  {
    id: "7",
    image:
      "https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796_1280.jpg",
    title: "House",
    targetDate: new Date().toString(),
    targetSavings: 500,
    totalSavings: 100000,
  },
];

interface HomeScreenProps {
  navigation: any;
}

export const HomeScreen: React.FC<HomeScreenProps> = () => (
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
          <SavingsList title="Personal" data={savings} />
          <VerticalSpace spacer={16} />
          <SavingsList title="Shared" data={savings} />
          <VerticalSpace spacer={16} />
        </ScrollView>
      </View>
    }
  />
);

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
