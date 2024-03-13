import React, { useCallback, useMemo } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../../../layouts/Colors";
import { defaultStyles } from "../../../layouts/DefaultStyles";
import { Subtitle, Body } from "../../../components/Typography";
import { VerticalSpace } from "../../../components/Spacer";
import { View, TouchableOpacity, StyleSheet } from "react-native";

interface IncomeSourcesActionBottomSheetProps {
  onClose: () => void;
  onAdd: () => void;
}

export const IncomeSourcesActionBottomSheet = React.forwardRef<
  BottomSheetModalMethods,
  IncomeSourcesActionBottomSheetProps
>(({ onClose, onAdd }, ref) => {
  const snapPoints = useMemo(() => ["10%", "25%"], []);

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
        <View style={defaultStyles.p16}>
          <TouchableOpacity onPress={onAdd}>
            <Body>Add</Body>
          </TouchableOpacity>
        </View>
        <View style={defaultStyles.dottedSeparator} />
        <View style={defaultStyles.p16}>
          <Body>View History</Body>
        </View>
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
