export interface SourceDetailsHistory {
  date: Date;
  amount: number;
}

export const sourceDetailHistoryMockData: SourceDetailsHistory[] = [
  { date: new Date(2024, 2, 1), amount: 100 },
  { date: new Date(2024, 2, 2), amount: 150 },
  { date: new Date(2024, 2, 3), amount: 200 },
  { date: new Date(2024, 2, 4), amount: 120 },
  { date: new Date(2024, 2, 5), amount: 180 },
  { date: new Date(2024, 2, 6), amount: 220 },
  { date: new Date(2024, 2, 7), amount: 130 },
  { date: new Date(2024, 2, 8), amount: 170 },
  { date: new Date(2024, 2, 9), amount: 190 },
  { date: new Date(2024, 2, 10), amount: 210 },
];
