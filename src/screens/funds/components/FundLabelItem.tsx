import { useRef } from "react";
import {
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { Caption } from "../../../components/Typography";
import { colors } from "../../../layouts/Colors";
import { defaultStyles } from "../../../layouts/DefaultStyles";
import { HorizontalSpace } from "../../../components/Spacer";
import { Swipeable } from "react-native-gesture-handler";
import { FundLabel } from "../../../store/fundLabels/types";

interface FundLabelItemProps {
  fundLabel: FundLabel;
  totalFundPerLabel: number;
  onEditFundLabel: () => void;
  onDeleteFundLabel: () => void;
  onNavigateToDetails: () => void;
}

export const FundLabelItem = ({
  fundLabel,
  totalFundPerLabel,
  onEditFundLabel,
  onDeleteFundLabel,
  onNavigateToDetails,
}: FundLabelItemProps) => {
  const swipeableRef = useRef<Swipeable>(null);

  const closeSwipeable = () => {
    swipeableRef?.current?.close();
  };

  return (
    <Swipeable
      ref={swipeableRef}
      key={fundLabel.id}
      renderRightActions={() => (
        <View style={styles.swipeableRightActionContainer}>
          <TouchableOpacity
            style={[styles.swipeableRightActionItem, defaultStyles.bgInfo]}
            onPress={() => {
              closeSwipeable();
              onEditFundLabel();
            }}
          >
            <FontAwesome
              name="pencil-square-o"
              size={20}
              color={colors.white}
            />
          </TouchableOpacity>
          <View
            style={[styles.swipeableRightActionItem, defaultStyles.bgDanger]}
          >
            <TouchableOpacity onPress={onDeleteFundLabel}>
              <Feather name="trash" size={20} color={colors.white} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    >
      <TouchableOpacity onPress={onNavigateToDetails} style={styles.item}>
        <Caption text={fundLabel.title} />
        <View style={defaultStyles.centerHorizontally}>
          <Caption
            text={`PHP ${totalFundPerLabel.toLocaleString()}`}
            fontWeight="500"
          />
          <HorizontalSpace spacer={8} />
          <MaterialCommunityIcons
            name="greater-than"
            size={16}
            color={colors.success}
          />
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  swipeableRightActionContainer: {
    flexDirection: "row",
    height: "100%",
    width: "30%",
    ...defaultStyles.center,
  },
  swipeableRightActionItem: {
    ...defaultStyles.center,
    ...defaultStyles.h100,
    ...defaultStyles.flex1,
  },
  item: {
    backgroundColor: colors.background,
    ...defaultStyles.centerHorizontallyBetween,
    ...defaultStyles.px8,
    ...defaultStyles.py16,
  },
});
