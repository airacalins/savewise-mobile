import React, { useEffect, useState } from "react";
import {
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

import { colors } from "../../layouts/Colors";
import { ConfirmationModal } from "../../components/Modal";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { Details } from "../../components/Details";
import { IconButton } from "../../components/Button";
import { Padding } from "../../components/Padding";
import { Screen } from "../../components/Screens/Screen";
import { Subtitle } from "../../components/Typography";
import { VerticalSpace } from "../../components/Spacer";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchFundById } from "../../store/funds/action";
import { FundsStackParamList } from "../../navigation/FundStackNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LoadingScreen } from "../../components/Screens/LoadingScreen";
import moment from "moment";

type FundStackProps = NativeStackScreenProps<
  FundsStackParamList,
  "FundDetails"
>;

export const FundDetailsScreen = ({ navigation, route }: FundStackProps) => {
  const dispatch = useAppDispatch();
  const { isFetching, selectedFund: fund } = useAppSelector(
    (state) => state.fund
  );

  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  useEffect(() => {
    dispatch(fetchFundById(route.params?.fundId));
  }, []);

  const handleDelete = () => {
    setIsDeleteModalVisible(true);
  };

  const handleEdit = () => navigation.navigate("AllocateFund");

  if (isFetching || !fund) return <LoadingScreen />;

  return (
    <Screen>
      <View style={defaultStyles.centerHorizontallyBetween}>
        <Padding pl={16}>
          <Subtitle>Details</Subtitle>
        </Padding>
        <View style={[defaultStyles.centerHorizontally, { paddingRight: 8 }]}>
          <IconButton
            onPress={handleEdit}
            size="S"
            IconComponent={
              <Octicons name="pencil" size={16} color={colors.info} />
            }
          />
        </View>
      </View>

      <View style={defaultStyles.listTileSeparator} />

      <VerticalSpace spacer={0} />

      <Padding px={8}>
        <Details
          title="Savings for"
          details={fund.title}
          IconComponent={
            <MaterialCommunityIcons
              name="hand-coin-outline"
              size={32}
              color={colors.dark}
            />
          }
        />

        <Details
          title="Transaction Date"
          details={moment(fund.date).format("MMMM DD, YYYY")}
          IconComponent={
            <MaterialCommunityIcons
              name="calendar-blank-outline"
              size={32}
              color={colors.dark}
            />
          }
        />

        {/* <Details
          title="Description"
          details="For the car because why not? For the car because why not? For
                  the car because why not?"
          IconComponent={<Entypo name="text" size={32} color={colors.dark} />}
        /> */}

        <Details
          title="Amount"
          details={`₱ ${Math.abs(fund.amount).toLocaleString()}`}
          IconComponent={
            <MaterialIcons name="outbox" size={32} color={colors.dark} />
          }
        />
      </Padding>

      <ConfirmationModal
        title="Are you sure you want to delete?"
        confirmButtonTitle="Yes, I'm sure!"
        visible={isDeleteModalVisible}
        onConfirm={() => {
          setIsDeleteModalVisible(false);
          navigation.goBack();
        }}
        onClose={() => setIsDeleteModalVisible(false)}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  modal: {
    backgroundColor: colors.background,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
});
