import { StyleSheet } from "react-native";

import { colors } from "./Colors";

export const defaultStyles = StyleSheet.create({
  listTileSeparator: {
    borderColor: colors.border,
    borderWidth: 0.5,
    marginVertical: 4,
    width: "100%",
  },

  // Alignments
  flex1: { flex: 1 },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  centerAlignHorizontally: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  row: { flexDirection: "row" },
  centerHorizontally: {
    alignItems: "center",
    flexDirection: "row",
  },
  centerHorizontallyBetween: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  h100: { height: "100%" },
  w100: { width: "100%" },

  // Separator
  dottedSeparator: {
    borderStyle: "dotted",
    borderWidth: 0.5,
    borderRadius: 1,
    borderColor: colors.border,
  },

  // Text
  fontWeight500: { fontWeight: "500" },
  textDanger: { color: colors.danger },
  textDark: { color: colors.dark },
  textInfo: { color: colors.info },
  textSuccess: { color: colors.success },
  textWhite: { color: colors.white },
  textCenter: { textAlign: "center" },

  // Background Color
  bgInfo: { backgroundColor: colors.info },
  bgDanger: { backgroundColor: colors.danger },

  // Padding
  p8: { padding: 8 },
  p16: { padding: 16 },
  px8: { paddingHorizontal: 8 },
  px16: { paddingHorizontal: 16 },
  py16: { paddingVertical: 16 },
  pb16: { paddingBottom: 16 },
  pb24: { paddingBottom: 24 },
  pl8: { paddingLeft: 8 },
  pl16: { paddingLeft: 16 },
});
