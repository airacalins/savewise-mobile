import React from "react";
import { StyleSheet, View } from "react-native";

import { Button } from "../../../components/Buttons/Button";
import { Subtitle, Title } from "../../../components/Typography";
import { colors } from "../../../layouts/Colors";
import { defaultStyles } from "../../../layouts/DefaultStyles";
import { OffsetContainer } from "../../../components/Container";
import { PESO_SIGN } from "../../../utils/string";

interface FundLabelsCardProps {
  title: string;
  total: number;
  ListComponent: React.ReactNode;
  onCreateFundLabel: () => void;
}

export const FundLabelsCard: React.FC<FundLabelsCardProps> = ({
  title,
  total,
  ListComponent,
  onCreateFundLabel,
}) => {
  return (
    <>
      <View style={defaultStyles.centerHorizontallyBetween}>
        <View style={defaultStyles.px8}>
          <Subtitle text={title} />
        </View>
        <Button title="Manage" uppercase onPress={onCreateFundLabel} />
      </View>
      <OffsetContainer>
        <View style={styles.headerContainer}>
          <Title text={`${PESO_SIGN} ${total.toLocaleString()}`} />
        </View>
        {ListComponent}
      </OffsetContainer>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.border,
    borderRadius: 8,
    padding: 16,
  },
});
