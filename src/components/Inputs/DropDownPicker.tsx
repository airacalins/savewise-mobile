import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";

import { Body } from "../Typography";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { OffsetContainer } from "../Container";
import { VerticalSpace } from "../Spacer";
import { TextButton } from "../Buttons/TextButton";

interface Item {
  label: string;
  value: string;
}

interface DropDownPickerProps {
  title: string;
  placeholder?: string;
  addItemLabel?: string;
  items: Item[];
  defaultValue: string;
  onSelectAdd?: () => void;
  onSelect: (value: string) => void;
}

const DropDownPicker: React.FC<DropDownPickerProps> = ({
  title,
  placeholder,
  addItemLabel,
  items,
  defaultValue,
  onSelectAdd,
  onSelect,
}) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(defaultValue);

  const handleSelectItem = (value: string) => {
    setSelectedItem(value);
    setOpen(false);
    onSelect(value);
  };

  return (
    <>
      <Body fontWeight="500" style={defaultStyles.px8}>
        {title}
      </Body>
      <OffsetContainer style={{ height: 50 }}>
        <TouchableOpacity
          onPress={() => setOpen(!open)}
          style={{ justifyContent: "center", flex: 1, paddingHorizontal: 8 }}
        >
          <Body>{selectedItem || placeholder}</Body>
        </TouchableOpacity>
      </OffsetContainer>

      {open && (
        <OffsetContainer padding={8} style={styles.dropdownItems}>
          {addItemLabel && onSelectAdd && (
            <View style={[defaultStyles.p8, defaultStyles.fullWidth]}>
              <TextButton
                onPress={onSelectAdd}
                style={defaultStyles.p8}
                title={addItemLabel}
              />
            </View>
          )}
          {items.map((item) => (
            <TouchableOpacity
              key={item.value}
              onPress={() => handleSelectItem(item.value)}
              style={defaultStyles.p8}
            >
              <Body>{item.label}</Body>
            </TouchableOpacity>
          ))}
        </OffsetContainer>
      )}
      <VerticalSpace spacer={24} />
    </>
  );
};

const styles = StyleSheet.create({
  dropdownItems: {
    position: "absolute",
    left: 8,
    top: -8,
  },
});

export default DropDownPicker;
