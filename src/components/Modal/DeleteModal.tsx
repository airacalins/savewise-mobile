import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Modal } from "./Modal";
import { colors } from "../../layouts/Colors";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { Button, ButtonSize } from "../Buttons/Button";
import { TextButton } from "../Buttons/TextButton";
import { VerticalSpace } from "../Spacer";
import { Subtitle } from "../Typography";

interface DeleteModalProps {
  isVisible: boolean;
  title: string;
  subTitle: string;
  onClose: () => void;
  onDelete: () => void;
  onCancel: () => void;
}

export const DeleteModal = ({
  isVisible,
  title,
  subTitle,
  onClose,
  onDelete,
  onCancel,
}: DeleteModalProps) => {
  return (
    <Modal
      modalVisible={isVisible}
      contents={
        <View style={defaultStyles.center}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={64}
            color={colors.dark}
          />
          <VerticalSpace spacer={24} />
          <Subtitle fontWeight="400" style={defaultStyles.textCenter}>
            {title}
          </Subtitle>
          <VerticalSpace spacer={8} />
          <Subtitle fontWeight="400" style={defaultStyles.textCenter}>
            {subTitle}
          </Subtitle>
          <VerticalSpace spacer={24} />
          <View style={defaultStyles.w100}>
            <Button
              title="Yes, Delete"
              size={ButtonSize.Medium}
              isFullWidth
              bgColor="danger"
              onPress={onDelete}
            />
          </View>
          <VerticalSpace spacer={8} />
          <View style={(defaultStyles.w100, defaultStyles.center)}>
            <TextButton
              title="Cancel"
              color={colors.danger}
              onPress={onCancel}
            />
          </View>
          <VerticalSpace spacer={16} />
        </View>
      }
      onClose={onClose}
    ></Modal>
  );
};
