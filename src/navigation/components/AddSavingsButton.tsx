import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { colors } from "../../layouts/Colors";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

interface AddSavingsButtonProps {
  onPress: () => void;
}

export const AddSavingsButton: React.FC<AddSavingsButtonProps> = ({
  onPress,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Entypo name="plus" size={32} color={colors.dark} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.white,
    borderColor: colors.dark,
    borderRadius: 40,
    borderWidth: 10,
    bottom: 32,
    height: 80,
    justifyContent: "center",
    width: 80,
  },
});
