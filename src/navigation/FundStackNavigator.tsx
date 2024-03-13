import { createStackNavigator } from "@react-navigation/stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { CashInScreen } from "../screens/funds/CashInScreen";
import { CashOutScreen } from "../screens/funds/CashOutScreen";
import { colors } from "../layouts/Colors";
import { FundDetailsScreen } from "../screens/funds/FundDetailsScreen";
import { FundsScreen } from "../screens/funds/FundsScreen";
import { IncomeSourcesScreen } from "../screens/funds/IncomeSourcesScreen";
import { IncomeSourceDetailsScreen } from "../screens/funds/IncomeSourceDetailsScreen";

export type FundsStackParamList = {
  Funds: undefined;
  FundDetails: { id: string };
  CashIn: undefined;
  CashOut: undefined;
  IncomeSources: undefined;
  IncomeSourceDetails: undefined;
};

export type FundStackProps = NativeStackScreenProps<FundsStackParamList>;

const Stack = createStackNavigator<FundsStackParamList>();

export const FundsStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: colors.dark,
      headerStyle: {
        backgroundColor: colors.background,
      },
    }}
  >
    <Stack.Screen name="Funds" component={FundsScreen} />
    <Stack.Screen
      name="FundDetails"
      options={{ headerTitle: "Fund Details" }}
      component={FundDetailsScreen}
    />
    <Stack.Screen name="CashIn" component={CashInScreen} />
    <Stack.Screen name="CashOut" component={CashOutScreen} />
    <Stack.Screen name="IncomeSources" component={IncomeSourcesScreen} />
    <Stack.Screen
      name="IncomeSourceDetails"
      options={{ headerTitle: "Source Details" }}
      component={IncomeSourceDetailsScreen}
    />
  </Stack.Navigator>
);
