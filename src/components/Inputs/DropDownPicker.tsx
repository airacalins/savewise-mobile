import React, { useEffect, useState } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";

import { Body } from "../Typography";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { OffsetContainer } from "../Container";
import { VerticalSpace } from "../Spacer";
import { TextButton } from "../Buttons/TextButton";

interface Item {
  id: string;
  label: string;
}

interface DropDownPickerProps {
  title: string;
  placeholder?: string;
  addItemLabel?: string;
  items: Item[];
  defaultValue: Item;
  onSelectAdd?: () => void;
  onSelectItem: (value: Item) => void;
}

const DropDownPicker: React.FC<DropDownPickerProps> = ({
  title,
  placeholder,
  addItemLabel,
  items,
  defaultValue,
  onSelectAdd,
  onSelectItem,
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item>(defaultValue);

  const handleSelectItem = (item: Item) => {
    setSelectedItem(item);
    onSelectItem(item);
    setOpenDropdown(false);
  };

  return (
    <>
      <Body fontWeight="500" style={defaultStyles.px8}>
        {title}
      </Body>
      <OffsetContainer style={styles.inputContainer}>
        <TouchableOpacity
          onPress={() => setOpenDropdown(!openDropdown)}
          style={styles.value}
        >
          <Body>{selectedItem.label || placeholder}</Body>
        </TouchableOpacity>
      </OffsetContainer>

      {openDropdown && (
        <OffsetContainer padding={8} style={styles.dropdownItems}>
          {addItemLabel && onSelectAdd && (
            <View style={[defaultStyles.p8, defaultStyles.w100]}>
              <TextButton onPress={onSelectAdd} title={addItemLabel} />
            </View>
          )}
          {items.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                console.log(item.label);
                handleSelectItem(item);
              }}
              style={[defaultStyles.p8, defaultStyles.w100]}
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
  inputContainer: {
    height: 50,
  },
  value: {
    justifyContent: "center",
    flex: 1,
    paddingHorizontal: 8,
  },
  dropdownItems: {
    position: "absolute",
    left: 8,
    top: -8,
  },
});

export default DropDownPicker;
