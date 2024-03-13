import React, { useCallback, useMemo } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import { colors } from "../../../layouts/Colors";
import { defaultStyles } from "../../../layouts/DefaultStyles";
import { VerticalSpace } from "../../../components/Spacer";
import { Subtitle, Body } from "../../../components/Typography";

interface MoreActionBottomSheetProps {
  onClose: () => void;
  onCashInPress: () => void;
  onCashOutPress: () => void;
}

export const MoreActionBottomSheet = React.forwardRef<
  BottomSheetModalMethods,
  MoreActionBottomSheetProps
>(({ onClose, onCashInPress, onCashOutPress }, ref) => {
  const snapPoints = useMemo(() => ["15%", "30%"], []);

  const renderBackdrop = useCallback(
    (backdropProps: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...backdropProps}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        pressBehavior="none"
      />
    ),
    []
  );

  return (
    <BottomSheetModal
      ref={ref}
      index={1}
      snapPoints={snapPoints}
      handleIndicatorStyle={{ display: "none" }}
      backdropComponent={renderBackdrop}
    >
      <BottomSheetView style={styles.content}>
        <View style={defaultStyles.centerHorizontally}>
          <View style={[defaultStyles.px8]}>
            <TouchableOpacity onPress={onClose}>
              <MaterialCommunityIcons
                name="close"
                size={24}
                color={colors.success}
              />
            </TouchableOpacity>
          </View>
          <Subtitle>Select Action</Subtitle>
        </View>
        <VerticalSpace spacer={16} />
        <TouchableOpacity onPress={onCashInPress} style={defaultStyles.p16}>
          <Body>Cash-In</Body>
        </TouchableOpacity>
        <View style={defaultStyles.dottedSeparator} />
        <TouchableOpacity onPress={onCashOutPress} style={defaultStyles.p16}>
          <Body>Cash-Out</Body>
        </TouchableOpacity>
        <View style={defaultStyles.dottedSeparator} />
        <TouchableOpacity onPress={onCashOutPress} style={defaultStyles.p16}>
          <Body>View History</Body>
        </TouchableOpacity>
      </BottomSheetView>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
