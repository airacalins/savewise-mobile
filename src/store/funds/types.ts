export interface FundsState {
  isFetching: boolean;
  funds: Fund[];
  fund?: Fund;
}

export interface Fund {
  // id: string;
  // image: string;
  // title: string;
  // amount: number;
  // date: string;
  // createdAt: string;

  id: string;
  image: string;
  title: string;
  amount: number;
  date: string;
  year: number;
  month: string;
  createdAt: string;
}

export interface AddFund {
  title: string;
  amount: number;
  date: string;
  createdAt: string;
}

// const groupBy = (input:any, key: string) => {
//   return input.reduce((acc:any, currentValue:any) => {
//     let groupKey = currentValue[key];
//     if (!acc[groupKey]) {
//       acc[groupKey] = [];
//     }
//     acc[groupKey].push(currentValue);
//     return acc;
//   }, {});
// };

// var data = groupBy(funds, 'year');
// console.log(data)
