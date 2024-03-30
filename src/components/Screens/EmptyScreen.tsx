import React from "react";
import { StyleSheet, View } from "react-native";

import { Body, Caption } from "../Typography";
import { colors } from "../../layouts/Colors";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { VerticalSpace } from "../Spacer";
import { Button, ButtonSize } from "../Buttons/Button";

interface EmptyScreenProps {
  text: string;
  buttonText: string;
  onPress: () => void;
}

export const EmptyScreen: React.FC<EmptyScreenProps> = ({
  text,
  buttonText,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <Body text={text} />
      <VerticalSpace spacer={16} />
      <Button
        title={buttonText}
        size={ButtonSize.Medium}
        bgColor="dark"
        onPress={onPress}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    ...defaultStyles.center,
  },
});
