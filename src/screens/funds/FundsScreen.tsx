import React, { useEffect, useMemo, useRef } from "react";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { StyleSheet, ScrollView, TouchableOpacity, View } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import { Caption, Header } from "../../components/Typography";
import { CashInBottomSheet } from "./components/CashInBottomSheet";
import { CashOutBottomSheet } from "./components/CashOutBottomSheet";
import { colors } from "../../layouts/Colors";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { fetchFunds } from "../../store/funds/action";
import { Funds } from "./components/Funds";
import { FundsStackProps } from "../../navigation/FundStackNavigator";
import { IconButton } from "../../components/Button";
import { LoadingScreen } from "../../components/Screens/LoadingScreen";
import { OffsetContainer } from "../../components/Container";
import { Padding } from "../../components/Padding";
import { Screen } from "../../components/Screens/Screen";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { VerticalSpace } from "../../components/Spacer";

export const FundsScreen = ({ navigation }: FundsStackProps) => {
  const dispatch = useAppDispatch();
  const { isFetching, funds } = useAppSelector((state) => state.fund);

  const cashInModalRef = useRef<BottomSheetModalMethods>(null);
  const cashOutModalRef = useRef<BottomSheetModalMethods>(null);

  const handleNavigateToAllocateFundScreen = () =>
    navigation.navigate("AllocateFund");

  useEffect(() => {
    dispatch(fetchFunds());
  }, []);

  const totalFunds = useMemo(
    () => funds.reduce((accumulator, fund) => accumulator + fund.amount, 0),
    [funds]
  );

  if (isFetching) return <LoadingScreen />;

  return (
    <Screen>
      <OffsetContainer padding={16}>
        <View style={defaultStyles.centerHorizontallyBetween}>
          <View>
            <Caption>Total Funds</Caption>
            <VerticalSpace spacer={8} />
            <Header>₱ {totalFunds.toLocaleString()}</Header>
          </View>

          <TouchableOpacity onPress={() => cashInModalRef.current?.present()}>
            <MaterialIcons
              name="move-to-inbox"
              size={32}
              color={colors.success}
            />
          </TouchableOpacity>
        </View>
      </OffsetContainer>

      <VerticalSpace spacer={16} />

      <View style={defaultStyles.centerHorizontally}>
        <View style={styles.iconContainer}>
          <IconButton
            onPress={handleNavigateToAllocateFundScreen}
            title="Allocate"
            IconComponent={
              <MaterialCommunityIcons
                name="hand-coin-outline"
                size={24}
                color={colors.info}
              />
            }
          />
        </View>

        <View style={styles.iconContainer}>
          <IconButton
            onPress={() => cashOutModalRef.current?.present()}
            title="Cash out"
            IconComponent={
              <MaterialIcons name="outbox" size={24} color={colors.danger} />
            }
          />
        </View>
      </View>

      <VerticalSpace spacer={8} />

      <ScrollView>
        <Padding p={8}>
          <Funds funds={funds} />
        </Padding>
      </ScrollView>

      <CashInBottomSheet ref={cashInModalRef} />
      <CashOutBottomSheet ref={cashOutModalRef} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
  },
});
