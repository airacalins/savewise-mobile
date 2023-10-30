import React from "react";
import { TouchableOpacity, View } from "react-native";

import { defaultStyles } from "../../../layouts/DefaultStyles";
import { Body, Header } from "../../../components/Typography";
import { HorizontalSpace } from "../../../components/Spacer";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../layouts/Colors";
import { CircularImage } from "../../../components/Image";
import { useNavigation } from "@react-navigation/native";
import { HomeStackParamList } from "../../../navigation/HomeStackNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface BannerProps {
  image: string;
  name: string;
}

export const Banner: React.FC<BannerProps> = ({ name, image }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

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

      <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
        <Ionicons name="ios-notifications" size={24} color={colors.dark} />
      </TouchableOpacity>
    </View>
  );
};
