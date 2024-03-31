import React from "react";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";

import { defaultStyles } from "../../layouts/DefaultStyles";
import { HorizontalSpace } from "../Spacer";
import { OffsetContainer } from "../Container";
import { Subtitle } from "../Typography";

interface IconButtonProps extends TouchableOpacityProps {
  size?: "S" | "M";
  title?: string;
  IconComponent: React.ReactNode;
}

export const IconButton: React.FC<IconButtonProps> = ({
  size = "S",
  title,
  IconComponent,
  ...props
}) => {
  const buttonSize = () => {
    switch (size) {
      case "S":
        return 8;
      case "M":
        return 16;
      default:
        return 16;
    }
  };

  return (
    <TouchableOpacity {...props}>
      <OffsetContainer padding={buttonSize()}>
        <View style={defaultStyles.centerHorizontally}>
          {IconComponent}
          {title && (
            <>
              <HorizontalSpace spacer={8} />
              <Subtitle text={title} />
            </>
          )}
        </View>
      </OffsetContainer>
    </TouchableOpacity>
  );
};
