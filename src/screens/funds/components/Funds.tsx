import React, { useMemo } from "react";

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
  0;
  const fundsByYear = useMemo(() => groupByYear(funds), [funds]);

  const years = useMemo(
    () => Object.getOwnPropertyNames(fundsByYear).reverse(),
    [fundsByYear]
  );

  return (
    <>
      {years.map((year, index) => (
        <MonthlyFund key={index} year={year} funds={fundsByYear[year]} />
      ))}
    </>
  );
};
