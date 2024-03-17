import React, { useState } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

import incomeSources from "../../data/IncomeSources";
import { Body, Subtitle } from "../../components/Typography";
import { Button } from "../../components/Buttons/Button";
import { colors } from "../../layouts/Colors";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { VerticalSpace } from "../../components/Spacer";

export const IncomeSourcesScreen = () => {
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Carousel
        data={incomeSources}
        renderItem={({ item, index }) => {
          setActiveDotIndex(index);

          return (
            <View style={styles.container}>
              <MaterialCommunityIcons
                name={item.icon as any}
                size={256}
                color={colors.dark}
              />
              <VerticalSpace spacer={16} />
              <Subtitle color={colors.success} style={defaultStyles.textCenter}>
                {item.title}
              </Subtitle>
              <VerticalSpace spacer={16} />
              <Body style={defaultStyles.textCenter}>{item.description}</Body>
            </View>
          );
        }}
        sliderWidth={300}
        itemWidth={300}
      />
      <Pagination
        dotsLength={incomeSources.length}
        activeDotIndex={activeDotIndex}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotOpacity={0.5}
        inactiveDotScale={0.8}
      />
      <View style={defaultStyles.fullWidth}>
        <Button
          title="Select this income source"
          uppercase
          bgColor="success"
          isFullWidth
          isValid={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
    padding: 16,
  },
  paginationContainer: {
    width: 50,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: colors.dark,
  },
});
