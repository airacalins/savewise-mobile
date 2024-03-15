import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  Modal as RNModal,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../layouts/Colors";

interface ModalProps {
  modalVisible: boolean;
  contents: React.ReactNode;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  modalVisible,
  contents,
  onClose,
}) => {
  return (
    <View style={styles.container}>
      <RNModal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={onClose}
      >
        <View style={styles.centeredView}>
          <TouchableOpacity onPress={onClose} style={styles.modalView}>
            <MaterialCommunityIcons
              style={styles.closeIcon}
              name="close"
              size={20}
            />
            <View style={{ width: "100%" }}>{contents}</View>
          </TouchableOpacity>
        </View>
      </RNModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modalView: {
    backgroundColor: colors.background,
    borderRadius: 8,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: "75%",
  },
  closeIcon: {
    alignSelf: "flex-end",
    paddingTop: 16,
    paddingRight: 16,
  },
});
