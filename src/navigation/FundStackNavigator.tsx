import { createStackNavigator } from "@react-navigation/stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { AddIncomeScreen } from "../screens/funds/AddIncomeScreen";
import { AddExpenseScreen } from "../screens/funds/AddExpenseScreen";
import { colors } from "../layouts/Colors";
import { FundDetailsScreen } from "../screens/funds/FundDetailsScreen";
import { FundsScreen } from "../screens/funds/FundsScreen";

export type FundsStackParamList = {
  Funds: undefined;
  FundDetails: { id: string };
  AddIncome: undefined;
  AddExpense: undefined;
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
    <Stack.Screen
      name="AddIncome"
      options={{ headerTitle: "Add Income" }}
      component={AddIncomeScreen}
    />
    <Stack.Screen
      name="AddExpense"
      options={{ headerTitle: "Add Expenses" }}
      component={AddExpenseScreen}
    />
  </Stack.Navigator>
);
