import { format } from "date-fns";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import { defaultStyles } from "../../../layouts/DefaultStyles";
import { Caption, Subtitle } from "../../../components/Typography";
import { ListTile } from "../../../components/ListTile";
import { OffsetContainer } from "../../../components/Container";
import { Savings } from "../HomeScreen";

interface SavingsListProps {
  title: string;
  data: Savings[];
}

export const SavingsList: React.FC<SavingsListProps> = ({ title, data }) => {
  return (
    <View>
      <View style={{ paddingHorizontal: 16 }}>
        <Caption>{title}</Caption>
      </View>
      <OffsetContainer>
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
              onPress={() => {}}
              style={{ paddingHorizontal: 16 }}
            >
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
            </TouchableOpacity>
          )}
        />
      </OffsetContainer>
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
