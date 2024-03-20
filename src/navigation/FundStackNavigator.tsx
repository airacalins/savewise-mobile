import { createStackNavigator } from "@react-navigation/stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { colors } from "../layouts/Colors";
import { FundDetailsScreen } from "../screens/funds/FundDetailsScreen";
import { FundsScreen } from "../screens/funds/FundsScreen";
import { FundFormScreen } from "../screens/funds/FundFormScreen";
import { FundLabelType } from "../store/fundLabels/types";

export type FundsStackParamList = {
  Funds: undefined;
  FundDetails: { id: string };
  FundForm: undefined | { fundLabelType: FundLabelType };
  IncomeSources: undefined;
  IncomeDetails: undefined;
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
    <Stack.Screen name="FundForm" component={FundFormScreen} />
  </Stack.Navigator>
);
