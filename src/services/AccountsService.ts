import { IAccountData, IAccountType } from "@/interfaces";

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
        {
          balance: 1000.75,
          currency_id: 1,
          description: null,
          icon: {
            color: "#E91E63",
            component: "credit-card-outlined",
          },
          title: "Счет 1",
          type: 1,
        },
        {
          balance: 500,
          currency_id: 3,
          description: "China",
          icon: {
            color: "#00BCD4",
            component: "wallet-outlined",
          },
          title: "Счет 2",
          type: 1,
        },
        {
          balance: 1200,
          currency_id: 1,
          description: "Я хочу пиццы",
          icon: {
            color: "#FF9800",
            component: "gold-outlined",
          },
          title: "Долг 1",
          type: 2,
        },
        {
          balance: 250,
          currency_id: 5,
          description: null,
          icon: {
            color: "#9E9E9E",
            component: "bank-outlined",
          },
          title: "Сбережение 1",
          type: 3,
        },
      ],
      finances: [
        {
          assets: 2000,
          currency_name: "Российский рубль",
          key: "ruble",
          liabilities: 0,
        },
        {
          assets: 500,
          currency_name: "Доллар США",
          key: "dollar",
          liabilities: 20,
        },
      ],
    });
  },
};

export default AccountsService;
