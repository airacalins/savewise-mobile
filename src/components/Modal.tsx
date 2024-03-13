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
import { defaultStyles } from "../layouts/DefaultStyles";
import { Button } from "./Buttons/Button";
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
          <View style={defaultStyles.px8}>
            <Subtitle>{title}</Subtitle>
          </View>
          <VerticalSpace spacer={16} />
          <Button
            onPress={onConfirm}
            title={confirmButtonTitle}
            size="M"
            isValid={false}
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
