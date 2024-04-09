import React from "react";
import moment from "moment";
import MonthSelectorCalendar from "react-native-month-selector";
import { AntDesign } from "@expo/vector-icons";

import { colors } from "../../layouts/Colors";
import { OffsetContainer } from "../Container";
import { StyleSheet } from "react-native";

interface MonthYearPickerProps {
  selectedDate: Date | undefined;
  initialView: moment.Moment;
  onMonthTapped: (date: moment.Moment) => void;
  onYearChanged: (date: moment.Moment) => void;
}

export const MonthYearPicker: React.FC<MonthYearPickerProps> = ({
  selectedDate,
  initialView,
  onMonthTapped,
  onYearChanged,
}) => {
  return (
    <MonthSelectorCalendar
      selectedDate={moment(selectedDate)}
      initialView={initialView}
      maxDate={moment(new Date()).add(5, "years")}
      onMonthTapped={onMonthTapped}
      onYearChanged={onYearChanged}
      containerStyle={{ backgroundColor: "transparent" }}
      prevIcon={
        <OffsetContainer padding={8}>
          <AntDesign name="left" />
        </OffsetContainer>
      }
      nextIcon={
        <OffsetContainer padding={8}>
          <AntDesign name="right" />
        </OffsetContainer>
      }
      seperatorColor={colors.border}
      yearTextStyle={styles.text}
      monthTextStyle={styles.text}
      selectedMonthTextStyle={styles.selectedText}
      selectedBackgroundColor={colors.dark}
      currentMonthTextStyle={styles.text}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    letterSpacing: 0.5,
    color: colors.dark,
  },
  selectedText: {
    fontSize: 14,
    letterSpacing: 0.5,
    color: colors.white,
  },
});
