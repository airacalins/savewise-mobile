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

import { Caption, Subtitle } from "../../../components/Typography";
import { defaultStyles } from "../../../layouts/DefaultStyles";
import { ListTile } from "../../../components/ListTile";
import { OffsetContainer } from "../../../components/Container";
import { Saving } from "../../../interfaces/savings";
import { SavingsStackParamList } from "../../../navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

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
              title={item.title}
              subtitle={`₱${item.targetSavings} by ${format(
                new Date(2014, 1, 11),
                "MMM dd, yyyy"
              )}`}
              LeadingComponent={
                <Image style={styles.tileImage} source={{ uri: item.image }} />
              }
              TrailingComponent={<Subtitle>{`₱${item.totalSavings}`}</Subtitle>}
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
  },
});
