import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { format } from "date-fns";
import { useNavigation } from "@react-navigation/native";

import { Body, Caption, Subtitle } from "../../../components/Typography";
import { defaultStyles } from "../../../layouts/DefaultStyles";
import { ListTile } from "../../../components/ListTile";
import { OffsetContainer } from "../../../components/Container";
import { Saving } from "../../../interfaces/savings";
import { SavingsStackParamList } from "../../../navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { colors } from "../../../layouts/Colors";
import { VerticalSpace } from "../../../components/Spacer";

interface SavingsListProps {
  title: string;
  data: Saving[];
}

export const SavingsList: React.FC<SavingsListProps> = ({ title, data }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<SavingsStackParamList>>();

  return (
    <View>
      <View style={{ paddingHorizontal: 16 }}>
        <Caption>{title}</Caption>
      </View>
      <FlatList
        style={{ paddingVertical: 16 }}
        keyExtractor={(item) => item.id}
        data={data}
        scrollEnabled={false}
        ItemSeparatorComponent={() => (
          <View style={defaultStyles.listTileSeparator} />
        )}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("SavingsDetails")}
            style={{ paddingHorizontal: 16 }}
          >
            <ListTile
              LeadingComponent={
                <Image style={styles.tileImage} source={{ uri: item.image }} />
              }
              TitleComponent={
                <Body style={defaultStyles.fontWeight500}>{item.title}</Body>
              }
              SubtitleComponent={
                <Body>
                  {`₱${item.targetSavings} by ${format(
                    new Date(2014, 1, 11),
                    "MMM dd, yyyy"
                  )}`}
                </Body>
              }
              TrailingComponent={
                <Caption
                  style={{ color: colors.success }}
                >{`₱${item.totalSavings}`}</Caption>
              }
              onPress={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tileImage: {
    width: 50,
    height: 50,
    borderRadius: 2,
    marginRight: 8,
  },
});
