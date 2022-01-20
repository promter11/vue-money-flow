import { IAccountData, IAccountType, ICurrency } from "@/interfaces";

const AccountsService = {
  async getAccountTypes(): Promise<IAccountType[]> {
    return Promise.resolve([
      { label: "Обычный", value: 1 },
      { label: "Долговой", value: 2 },
      { label: "Накопительный", value: 3 },
    ]);
  },
  async getAccountsData(): Promise<IAccountData> {
    return Promise.resolve({
      accounts: [
        { balance: 100, currency_id: 1, description: null, title: "Счет 1" },
        { balance: 500, currency_id: 3, description: "China", title: "Счет 2" },
      ],
      debts: [
        {
          balance: 1200,
          currency_id: 1,
          description: "Я хочу пиццы",
          title: "Долг 1",
        },
      ],
      finances: {
        data: [
          {
            assets: 2000,
            currency_name: "Российский рубль",
            key: "ruble",
            liability: 0,
          },
          {
            assets: 500,
            currency_name: "Доллар США",
            key: "dollar",
            liability: 20,
          },
        ],
        total: {
          assets: 2500,
          liability: 20,
        },
      },
      savings: [
        {
          balance: 250,
          currency_id: 5,
          description: null,
          title: "Сбережение 1",
        },
      ],
    });
  },
  async getCurrencies(): Promise<ICurrency[]> {
    return Promise.resolve([
      { label: "Британский фунт", sign: "£", value: 1 },
      { label: "Доллар США", sign: "$", value: 2 },
      { label: "Евро", sign: "€", value: 3 },
      { label: "Российский рубль", sign: "₽", value: 4 },
      { label: "Японская йена", sign: "¥", value: 5 },
    ]);
  },
};

export default AccountsService;
