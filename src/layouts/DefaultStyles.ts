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
  centerHorizontally: {
    alignItems: "center",
    flexDirection: "row",
  },
  centerHorizontallyBetween: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  horizontalPadding: {
    paddingHorizontal: 16,
  },
  fontWeight500: {
    fontWeight: "500",
  },
});
