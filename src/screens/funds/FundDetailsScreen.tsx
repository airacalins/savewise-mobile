import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
import { format } from "date-fns";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Button } from "../../components/Buttons/Button";
import { Caption } from "../../components/Typography";
import { defaultStyles } from "../../layouts/DefaultStyles";
import { EmptyScreen } from "../../components/Screens/EmptyScreen";
import { FundsStackParamList } from "../../navigation/FundStackNavigator";
import { LoadingScreen } from "../../components/Screens/LoadingScreen";
import { OffsetContainer } from "../../components/Container";
import { ScrollableScreen } from "../../components/Screens/ScrollableScreen";
import { Separator } from "../../components/Separator/Separator";
import {
  FUND_LABEL_QUERY_KEY,
  getFundLabelById,
} from "../../api/fundLabels/hooks";
import { useQuery } from "@tanstack/react-query";
import { FUNDS_QUERY_KEY, getFundsByFundLabelId } from "../../api/funds/hooks";

type FundStackProps = NativeStackScreenProps<
  FundsStackParamList,
  "FundDetails"
>;
export const FundDetailsScreen = ({ navigation, route }: FundStackProps) => {
  const { fundLabel } = route.params;
  const {
    data: fundLabelData,
    isLoading: isLoadingFundLabel,
    refetch: refetchFundLabel,
  } = useQuery({
    queryFn: () => getFundLabelById(fundLabel.id),
    queryKey: [FUND_LABEL_QUERY_KEY],
  });

  const {
    data: fundsData,
    isLoading: isLoadingFunds,
    refetch: refetchFunds,
  } = useQuery({
    queryFn: () => getFundsByFundLabelId(fundLabel.id),
    queryKey: [FUNDS_QUERY_KEY],
  });

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

  const handleNavigateToFundFormScreen = () => {
    navigation.navigate("FundForm", { fundLabelType: fundLabel.fundLabelType });
  };

  const isLoading =
    !fundLabelData || !fundsData || isLoadingFundLabel || isLoadingFunds;

  if (isLoading) return <LoadingScreen />;

  if (fundsData?.length === 0)
    return (
      <EmptyScreen
        text={`No transaction for yet!`}
        buttonText={`Add fund to ${fundLabel.title}`}
        onPress={handleNavigateToFundFormScreen}
      />
    );

  return (
    <ScrollableScreen onRefresh={refetchFundLabel}>
      <OffsetContainer>
        <FlatList
          data={fundsData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                defaultStyles.centerHorizontallyBetween,
                defaultStyles.p16,
              ]}
            >
              <Caption text={format(new Date(item.date), "MMMM d, yyyy")} />
              <Caption
                text={`PHP ${item.amount.toLocaleString()}`}
                fontWeight="500"
              />
            </View>
          )}
          ItemSeparatorComponent={Separator}
          scrollEnabled={false}
        />
      </OffsetContainer>
    </ScrollableScreen>
  );
};
