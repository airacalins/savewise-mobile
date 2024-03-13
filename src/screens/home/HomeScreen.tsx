import React, { useCallback, useMemo, useRef } from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { ScrollView, StyleSheet, View } from "react-native";

import { Banner } from "./components/Banner";
import { Button } from "../../components/Buttons/Button";
import { Card } from "./components/Card";
import { colors } from "../../layouts/Colors";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { EmptyGoalCard } from "./components/EmptyGoalCard";
import { GoalCard } from "./components/GoalCard";
import { Label, Subtitle } from "../../components/Typography";
import { savingsMockData } from "../../data/SavingsMockData";
import { Screen } from "../../components/Screens/Screen";
import { VerticalSpace } from "../../components/Spacer";

export const HomeScreen: React.FC = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["10%", "25%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const renderBackdrop = useCallback(
    (backdropProps: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...backdropProps}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  );

  return (
    <Screen
      children={
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={defaultStyles.px8}>
            <Banner
              image="https://cdn.pixabay.com/photo/2016/12/19/21/36/woman-1919143_1280.jpg"
              name="Aira"
            />
          </View>

          <VerticalSpace spacer={16} />

          <View style={defaultStyles.centerHorizontally}>
            <View style={styles.card}>
              <Card
                title="Total Savings"
                subtitle="₱100,000"
                LeadingIconComponent={
                  <MaterialCommunityIcons
                    name="hand-coin-outline"
                    size={24}
                    color={colors.info}
                  />
                }
              />
            </View>
            <View style={styles.card}>
              <Card
                title="Last month"
                subtitle="₱100,000"
                LeadingIconComponent={
                  <AntDesign name="arrowup" size={24} color={colors.success} />
                }
              />
            </View>
          </View>

          <VerticalSpace spacer={16} />

          <>
            <View style={defaultStyles.centerAlignHorizontally}>
              <View style={[defaultStyles.flex1, defaultStyles.px8]}>
                <Subtitle>Goals</Subtitle>
              </View>
              {savingsMockData && (
                <Button
                  title="Manage"
                  uppercase
                  isValid={true}
                  onPress={() => bottomSheetModalRef.current?.present()}
                />
              )}
            </View>

            <EmptyGoalCard />

            {!savingsMockData ? (
              <EmptyGoalCard />
            ) : (
              savingsMockData.map((saving) => (
                <GoalCard
                  key={saving.id}
                  title={saving.title}
                  percent={0}
                  currentAmount={saving.currentAmount}
                  targetAmount={saving.totalAmount}
                />
              ))
            )}
          </>

          <VerticalSpace spacer={16} />

          <View style={defaultStyles.px8}>
            <Subtitle>Expenses</Subtitle>
          </View>

          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            handleIndicatorStyle={{ display: "none" }}
            backdropComponent={renderBackdrop}
          >
            <BottomSheetView
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: colors.background,
              }}
            >
              <Label>Awesome 🎉</Label>
            </BottomSheetView>
          </BottomSheetModal>

          {/* <VerticalSpace spacer={16} />
          <SavingsList title="Personal" data={personalSavings} />
          <VerticalSpace spacer={16} />
          <SavingsList title="Shared" data={sharedSavings} /> */}
        </ScrollView>
      }
    />
  );
};

const styles = StyleSheet.create({
  card: {
    width: "50%",
  },
  tileImage: {
    width: 50,
    height: 50,
    borderRadius: 2,
  },
});
