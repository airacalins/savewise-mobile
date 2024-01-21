import React, { useEffect, useMemo } from "react";
import { useNavigation } from "@react-navigation/native";

import { FundsStackParamList } from "../../../navigation/FundStackNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Fund } from "../../../store/funds/types";
import { MonthlyFund } from "./MonthlyFund";

type FundsProps = {
  funds: Fund[];
};

export const Funds: React.FC<FundsProps> = ({ funds }) => {
  const groupByYear = (fund: Fund[]) => {
    return fund.reduce((item: any, currentValue: any) => {
      const date = new Date(currentValue.date);
      let key = date.getFullYear();
      if (!item[key]) {
        item[key] = [];
      }
      item[key].push(currentValue);
      return item;
    }, {});
  };

  const fundsByYear = useMemo(() => groupByYear(funds), [funds]);

  const years = useMemo(
    () => Object.getOwnPropertyNames(fundsByYear).reverse(),
    [fundsByYear]
  );

  return (
    <>
      {years.map((year) => (
        <MonthlyFund key={year} year={year} funds={fundsByYear[year]} />
      ))}
    </>
  );
};
