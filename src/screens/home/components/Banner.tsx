import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Body, Header } from "../../../components/Typography";
import { CircularImage } from "../../../components/Image";
import { colors } from "../../../layouts/Colors";
import { defaultStyles } from "../../../layouts/DefaultStyles";
import { HomeStackParamList } from "../../../navigation/HomeStackNavigator";
import { HorizontalSpace } from "../../../components/Spacer";

interface BannerProps {
  image: string;
  name: string;
}

export const Banner: React.FC<BannerProps> = ({ name, image }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  return (
    <View style={[defaultStyles.centerHorizontallyBetween]}>
      <View style={defaultStyles.centerHorizontally}>
        <CircularImage source={image} />
        <HorizontalSpace spacer={16} />
        <View>
          <Body text="Hello," />
          <Header text={name} />
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
        <Ionicons name="ios-notifications" size={24} color={colors.dark} />
      </TouchableOpacity>
    </View>
  );
};
