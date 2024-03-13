type IncomeSourcesProp = {
  title: string;
  description: string;
  icon: string;
};

const incomeSources: IncomeSourcesProp[] = [
  {
    title: "Salary or wages from employment",
    description: "Regular income earned from working for an employer.",
    icon: "cash",
  },
  {
    title: "Freelance or contract work",
    description:
      "Income earned from providing services on a contract or freelance basis.",
    icon: "briefcase",
  },
  {
    title: "Business income",
    description:
      "Profits generated from running a business, after deducting expenses.",
    icon: "office-building",
  },
  {
    title: "Rental income",
    description:
      "Income earned from renting out property or assets to tenants.",
    icon: "home",
  },
  {
    title: "Investment returns (e.g., dividends, interest)",
    description:
      "Income generated from investments, such as dividends from stocks or interest from bonds or savings accounts.",
    icon: "chart-line",
  },
  {
    title: "Sale of assets (e.g., stocks, real estate)",
    description:
      "Income generated from selling assets like stocks, real estate, or other valuable items.",
    icon: "shopping",
  },
  {
    title: "Gifts or inheritances",
    description:
      "Money or assets received as a gift or inheritance from family members or others.",
    icon: "gift",
  },
  {
    title: "Loans received",
    description:
      "Money borrowed from individuals, financial institutions, or other entities.",
    icon: "bank",
  },
  {
    title: "Refunds or reimbursements",
    description:
      "Money received as a refund for overpaid expenses or as reimbursement for expenses incurred.",
    icon: "cash-refund",
  },
  {
    title: "Other miscellaneous sources (e.g., winnings, awards)",
    description:
      "Income from sources not listed above, such as lottery winnings, competition prizes, or awards.",
    icon: "trophy",
  },
];

export default incomeSources;
