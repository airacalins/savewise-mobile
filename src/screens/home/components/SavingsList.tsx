import React from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { FlatList, Image, StyleSheet, View } from "react-native";
import { format } from "date-fns";
import { MaterialIcons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import { Body, Caption, Label } from "../../../components/Typography";
import { colors } from "../../../layouts/Colors";
import { defaultStyles } from "../../../layouts/DefaultStyles";
import { HomeStackParamList } from "../../../navigation/HomeStackNavigator";
import { HorizontalSpace } from "../../../components/Spacer";
import { ListTile } from "../../../components/ListTile";
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
      <View style={defaultStyles.horizontalPadding}>
        <Label>{title}</Label>
      </View>
      <FlatList
        style={styles.listContainer}
        keyExtractor={(item) => item.id}
        data={data}
        scrollEnabled={false}
        ItemSeparatorComponent={() => (
          <View style={defaultStyles.listTileSeparator} />
        )}
        renderItem={({ item }) => (
          <Swipeable
            renderLeftActions={() => (
              <View
                style={[
                  defaultStyles.center,
                  {
                    flexDirection: "row",
                    height: "100%",
                    width: "50%",
                    backgroundColor: colors.danger,
                    marginRight: 16,
                  },
                ]}
              >
                <MaterialIcons
                  name="move-to-inbox"
                  size={32}
                  color={colors.white}
                />
                <HorizontalSpace spacer={8} />
                <Caption style={defaultStyles.textWhite}>
                  Put back to savings
                </Caption>
              </View>
            )}
            renderRightActions={() => (
              <View
                style={[
                  defaultStyles.center,
                  {
                    flexDirection: "row",
                    height: "100%",
                    width: "30%",
                    backgroundColor: colors.info,
                    marginLeft: 16,
                  },
                ]}
              >
                <MaterialIcons name="outbox" size={32} color={colors.white} />
                <HorizontalSpace spacer={8} />
                <Caption style={defaultStyles.textWhite}>Spend</Caption>
              </View>
            )}
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
                  style={defaultStyles.textSuccess}
                >{`₱${item.totalSavings}`}</Caption>
              }
              onPress={() => navigation.navigate("SavingsDetails")}
            />
          </Swipeable>
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
  listContainer: {
    padding: 16,
  },
});
