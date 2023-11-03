import React from "react";
import {
  Modal,
  ModalProps,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { colors } from "../layouts/Colors";
import { CustomButton } from "./Button";
import { Padding } from "./Padding";
import { Subtitle } from "./Typography";
import { VerticalSpace } from "./Spacer";

interface ConfirmationModalProps extends ModalProps {
  title: string;
  confirmButtonTitle: string;
  onConfirm: () => void;
  onClose: () => void;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  title,
  confirmButtonTitle,
  onConfirm,
  onClose,
  ...props
}) => {
  return (
    <Modal animationType="fade" transparent={true} {...props}>
      <View style={styles.centeredView}>
        <View style={styles.modal}>
          <View style={styles.closeButtonContainer}>
            <TouchableOpacity onPress={onClose}>
              <AntDesign name="close" size={16} color={colors.dark} />
            </TouchableOpacity>
          </View>
          <VerticalSpace spacer={32} />
          <Padding px={16}>
            <Subtitle>{title}</Subtitle>
          </Padding>
          <VerticalSpace spacer={16} />
          <CustomButton
            onPress={onConfirm}
            title={confirmButtonTitle}
            size="M"
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  modal: {
    backgroundColor: colors.background,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  closeButtonContainer: {
    alignSelf: "flex-end",
  },
});
