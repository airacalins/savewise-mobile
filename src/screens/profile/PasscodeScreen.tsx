import React, { useState } from "react";

import { ConfirmationModal } from "../../components/Modal";
import { Button } from "../../components/Buttons/Button";
import { PasscodeForm } from "./components/PasscodeForm";
import { Screen } from "../../components/Screens/Screen";
import { View } from "react-native";

export const PasscodeScreen = () => {
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);
  const [isPasswordRemoved, setIsPasswordRemoved] = useState(false);
  const [isRemovePasswordModalVisible, setIsRemovePasswordModalVisible] =
    useState(false);

  const handleRemovePassword = () => {
    setIsRemovePasswordModalVisible(false);
    setIsPasswordRemoved(true);
  };

  return (
    <Screen title="Passcode">
      <View style={{ paddingHorizontal: 8 }}>
        {isPasswordChanged || isPasswordRemoved ? (
          <PasscodeForm />
        ) : (
          <>
            <Button
              onPress={() => setIsPasswordChanged(true)}
              title={"Change Password"}
              size="M"
              isValid={false}
            />
            <Button
              onPress={() => setIsRemovePasswordModalVisible(true)}
              title={"Remove Password"}
              size="M"
              bgColor="danger"
              isValid={false}
            />
          </>
        )}
      </View>

      <ConfirmationModal
        title="Are you sure you want to delete?"
        confirmButtonTitle="Yes, I'm sure!"
        visible={isRemovePasswordModalVisible}
        onConfirm={handleRemovePassword}
        onClose={() => setIsRemovePasswordModalVisible(false)}
      />
    </Screen>
  );
};
