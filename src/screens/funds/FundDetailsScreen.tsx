import React, { useEffect, useState } from "react";
import moment from "moment";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { colors } from "../../layouts/Colors";
import { ConfirmationModal } from "../../components/Modal";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { Details } from "../../components/Details";
import { fetchFundById } from "../../store/funds/action";
import { FundsStackParamList } from "../../navigation/FundStackNavigator";
import { HorizontalSpace, VerticalSpace } from "../../components/Spacer";
import { IconButton } from "../../components/Buttons/IconButton";
import { LoadingScreen } from "../../components/Screens/LoadingScreen";
import { Screen } from "../../components/Screens/Screen";
import { Subtitle } from "../../components/Typography";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

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
    dispatch(fetchFundById(route.params?.id));
  }, []);

  const handleDelete = () => {
    setIsDeleteModalVisible(true);
  };

  if (isFetching || !fund) return <LoadingScreen />;

  return (
    <Screen>
      <View style={defaultStyles.centerHorizontallyBetween}>
        <View style={styles.header}>
          <TouchableWithoutFeedback onPress={navigation.goBack}>
            <Octicons name="arrow-left" size={16} color={colors.dark} />
          </TouchableWithoutFeedback>
          <HorizontalSpace spacer={16} />
          <Subtitle>Details</Subtitle>
        </View>
        <View style={[defaultStyles.centerHorizontally, { paddingRight: 8 }]}>
          <IconButton
            onPress={() => {}}
            size="S"
            IconComponent={
              <Octicons name="pencil" size={16} color={colors.info} />
            }
          />
        </View>
      </View>

      <View style={defaultStyles.listTileSeparator} />

      <VerticalSpace spacer={16} />

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
  header: {
    paddingLeft: 8,
    ...defaultStyles.centerAlignHorizontally,
  },
});
