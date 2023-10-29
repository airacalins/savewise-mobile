import { StyleSheet } from "react-native";

import { colors } from "./Colors";

export const defaultStyles = StyleSheet.create({
  listTileSeparator: {
    borderColor: colors.border,
    borderWidth: 0.5,
    marginVertical: 16,
    width: "100%",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  centerAlignHorizontally: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
  },
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
  horizontalPadding: {
    paddingHorizontal: 16,
  },
  fontWeight500: {
    fontWeight: "500",
  },
});
