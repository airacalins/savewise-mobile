import { createStackNavigator } from "@react-navigation/stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { AddIncomeScreen } from "../screens/funds/AddIncomeScreen";
import { AddExpenseScreen } from "../screens/funds/AddExpenseScreen";
import { colors } from "../layouts/Colors";
import { FundDetailsScreen } from "../screens/funds/FundDetailsScreen";
import { FundsScreen } from "../screens/funds/FundsScreen";
import { IncomeSourcesScreen } from "../screens/funds/IncomeSourcesScreen";
import { IncomeSourceDetailsScreen } from "../screens/funds/IncomeSourceDetailsScreen";

export type FundsStackParamList = {
  Funds: undefined;
  FundDetails: { id: string };
  AddIncome: undefined;
  AddExpense: undefined;
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
    <Stack.Screen
      name="IncomeSources"
      options={{ headerTitle: "Income Sources" }}
      component={IncomeSourcesScreen}
    />
    <Stack.Screen
      name="IncomeSourceDetails"
      options={{ headerTitle: "Source Details" }}
      component={IncomeSourceDetailsScreen}
    />
  </Stack.Navigator>
);
