import React from "react";
import { View } from "react-native";

import { defaultStyles } from "../../../layouts/DefaultStyles";
import { Body, Header } from "../../../components/Typography";
import { HorizontalSpace } from "../../../components/Spacer";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../layouts/Colors";
import { CircularImage } from "../../../components/Image";

interface BannerProps {
  image: string;
  name: string;
}

export const Banner: React.FC<BannerProps> = ({ name, image }) => {
  return (
    <View
      style={[
        defaultStyles.centerHorizontallyBetween,
        defaultStyles.horizontalPadding,
      ]}
    >
      <View style={defaultStyles.centerHorizontally}>
        <CircularImage source={image} />
        <HorizontalSpace spacer={16} />
        <View>
          <Body>Hello,</Body>
          <Header>{name}</Header>
        </View>
      </View>
      <Ionicons name="ios-notifications" size={24} color={colors.dark} />
    </View>
  );
};
