import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { GradientScreen } from "../../assets/components/Screen";
import {
  Body,
  Caption,
  Header,
  Subtitle,
  Title,
} from "../../assets/components/Typography";
import { HorizontalSpace, VerticalSpace } from "../../assets/components/Spacer";
import { FontAwesome } from "@expo/vector-icons";
import { format } from "date-fns";
import { ListTile } from "../../assets/components/ListTile";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../../layouts/Colors";
import { CircularImage } from "../../assets/components/Image";

interface Savings {
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
];

export const HomeScreen: React.FC = () => (
  <GradientScreen
    content={
      <View>
        <View style={defaultStyles.centerHorizontallyBetween}>
          <View style={defaultStyles.centerHorizontally}>
            <CircularImage source="https://cdn.pixabay.com/photo/2016/12/19/21/36/woman-1919143_1280.jpg" />
            <HorizontalSpace spacer={16} />
            <Header>Aira</Header>
          </View>
          <Ionicons name="ios-notifications" size={24} color={colors.white70} />
        </View>
        <VerticalSpace spacer={24} />
        <View style={defaultStyles.centerHorizontallyBetween}>
          <View>
            <View style={defaultStyles.centerHorizontally}>
              <Body>Total savings</Body>
              <HorizontalSpace spacer={8} />
              <FontAwesome name="circle" size={5} color={colors.white70} />
              <HorizontalSpace spacer={8} />
              <Body>All accounts</Body>
            </View>
            <VerticalSpace spacer={4} />
            <Title>₱100,000</Title>
            <VerticalSpace spacer={4} />
            <View style={defaultStyles.centerHorizontally}>
              <Body>+ ₱8,000 </Body>
              <Body>to last month</Body>
            </View>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: colors.white10,
              padding: 8,
              height: 48,
              width: 48,
              borderRadius: 4,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Entypo name="chevron-up" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <VerticalSpace spacer={32} />

        <View>
          <Caption>Personal</Caption>
          <VerticalSpace spacer={16} />
          <FlatList
            ItemSeparatorComponent={() => (
              <View style={defaultStyles.listTileSeparator} />
            )}
            data={savings}
            renderItem={({ item }) => (
              <ListTile
                title={item.title}
                subtitle={`₱${item.targetSavings} by ${format(
                  new Date(2014, 1, 11),
                  "MMM dd, yyyy"
                )}`}
                LeadingComponent={
                  <Image
                    style={styles.tileImage}
                    source={{ uri: item.image }}
                  />
                }
                TrailingComponent={
                  <Subtitle>{`₱${item.totalSavings}`}</Subtitle>
                }
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
        <VerticalSpace spacer={32} />
        <View>
          <Caption>Shared</Caption>
          <VerticalSpace spacer={16} />
          <FlatList
            ItemSeparatorComponent={() => (
              <View style={defaultStyles.listTileSeparator} />
            )}
            data={savings}
            renderItem={({ item }) => (
              <ListTile
                title={item.title}
                subtitle={`₱${item.targetSavings} by ${format(
                  new Date(2014, 1, 11),
                  "MMM dd, yyyy"
                )}`}
                LeadingComponent={
                  <Image
                    style={styles.tileImage}
                    source={{ uri: item.image }}
                  />
                }
                TrailingComponent={
                  <Subtitle>{`₱${item.totalSavings}`}</Subtitle>
                }
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    }
  />
);

const styles = StyleSheet.create({
  tileImage: {
    width: 50,
    height: 50,
    borderRadius: 2,
  },
});
