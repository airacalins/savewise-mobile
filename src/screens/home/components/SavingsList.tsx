import React from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import { format } from "date-fns";
import { useNavigation } from "@react-navigation/native";

import { Body, Caption } from "../../../components/Typography";
import { colors } from "../../../layouts/Colors";
import { defaultStyles } from "../../../layouts/DefaultStyles";
import { HomeStackParamList } from "../../../navigation/HomeStackNavigator";
import { ListTile } from "../../../components/ListTile";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Saving } from "../../../interfaces/savings";

interface SavingsListProps {
  title: string;
  data: Saving[];
}

export const SavingsList: React.FC<SavingsListProps> = ({ title, data }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  return (
    <View>
      <View style={{ paddingHorizontal: 16 }}>
        <Caption>{title}</Caption>
      </View>
      <FlatList
        style={{ padding: 16 }}
        keyExtractor={(item) => item.id}
        data={data}
        scrollEnabled={false}
        ItemSeparatorComponent={() => (
          <View style={defaultStyles.listTileSeparator} />
        )}
        renderItem={({ item }) => (
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
            onPress={() => navigation.navigate("SavingsDetails")}
          />
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
