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

interface FundActionBottomSheetProps {
  onClose: () => void;
  onAddIncome: () => void;
  onAddExpense: () => void;
}

export const FundActionBottomSheet = React.forwardRef<
  BottomSheetModalMethods,
  FundActionBottomSheetProps
>(({ onClose, onAddIncome, onAddExpense }, ref) => {
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
          <Subtitle text="Select Action" />
        </View>
        <VerticalSpace spacer={16} />
        <TouchableOpacity onPress={onAddIncome} style={defaultStyles.p16}>
          <Body text="Add Income" />
        </TouchableOpacity>
        <View style={defaultStyles.dottedSeparator} />
        <TouchableOpacity onPress={onAddExpense} style={defaultStyles.p16}>
          <Body text="Add Expense" />
        </TouchableOpacity>
        <View style={defaultStyles.dottedSeparator} />
        <TouchableOpacity onPress={onAddExpense} style={defaultStyles.p16}>
          <Body text="View History" />
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
