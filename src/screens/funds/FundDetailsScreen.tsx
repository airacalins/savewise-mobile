import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
import { format } from "date-fns";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Button } from "../../components/Buttons/Button";
import { Caption } from "../../components/Typography";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { fetchFundsByFundLabelId } from "../../store/funds/action";
import { Fund } from "../../store/funds/types";
import { FundsStackParamList } from "../../navigation/FundStackNavigator";
import { LoadingScreen } from "../../components/Screens/LoadingScreen";
import { OffsetContainer } from "../../components/Container";
import { Screen } from "../../components/Screens/Screen";
import { Separator } from "../../components/Separator/Separator";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { EmptyScreen } from "../../components/Screens/EmptyScreen";

type FundStackProps = NativeStackScreenProps<
  FundsStackParamList,
  "FundDetails"
>;
export const FundDetailsScreen = ({ navigation, route }: FundStackProps) => {
  const { fundLabel } = route.params;
  const dispatch = useAppDispatch();
  const { isFetching, fundsPerLabel } = useAppSelector((state) => state.fund);

  useEffect(() => {
    navigation.setOptions({
      title: fundLabel.title,
      headerRight: () => (
        <View style={{ paddingRight: 8 }}>
          <Button
            onPress={handleNavigateToFundFormScreen}
            title="Add"
            disabled={false}
          />
        </View>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    dispatch(fetchFundsByFundLabelId(fundLabel.id));
  }, [fundLabel.id]);

  const handleNavigateToFundFormScreen = () => {
    navigation.navigate("FundForm", { fundLabelType: fundLabel.fundLabelType });
  };

  if (isFetching) return <LoadingScreen />;

  if (fundsPerLabel.length === 0)
    return (
      <EmptyScreen
        text={`No transaction for yet!`}
        buttonText={`Add fund to ${fundLabel.title}`}
        onPress={handleNavigateToFundFormScreen}
      />
    );

  return (
    <Screen>
      <OffsetContainer>
        <FlatList
          data={fundsPerLabel}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                defaultStyles.centerHorizontallyBetween,
                defaultStyles.p16,
              ]}
            >
              <Caption text={format(new Date(item.date), "MMMM d, yyyy")} />
              <Caption text={`PHP ${item.amount}`} fontWeight="500" />
            </View>
          )}
          ItemSeparatorComponent={Separator}
          scrollEnabled={false}
        />
      </OffsetContainer>
    </Screen>
  );
};
