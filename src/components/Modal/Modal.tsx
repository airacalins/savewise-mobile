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
  onClose?: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  modalVisible,
  contents,
  onClose,
}) => {
  return (
    <View style={styles.container}>
      <RNModal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {onClose && (
              <TouchableOpacity onPress={onClose}>
                <MaterialCommunityIcons
                  style={styles.closeIcon}
                  name="close"
                  size={20}
                />
              </TouchableOpacity>
            )}
            <View style={styles.contents}>{contents}</View>
          </View>
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
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  contents: {
    padding: 16,
    width: "100%",
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
    width: "90%",
  },
  closeIcon: {
    alignSelf: "flex-end",
    paddingTop: 16,
    paddingRight: 16,
  },
});
