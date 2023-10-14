import { StyleSheet } from "react-native";
import { colors } from "./Colors";

export const defaultStyles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  gradientScreen: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 64,
  },
  listTileSeparator: {
    width: "100%",
    borderColor: colors.white70,
    borderWidth: 0.5,
    marginVertical: 16,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  centerHorizontally: {
    flexDirection: "row",
    alignItems: "center",
  },
  centerHorizontallyBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
