import { IAccountData } from "@/interfaces";

const AccountsService = {
  async getAccountsData(): Promise<IAccountData> {
    return Promise.resolve({
      accounts: [
        {
          _id: "1",
          balance: 1000.75,
          currency: 1,
          description: "",
          icon: {
            color: "#E91E63",
            component: "credit-card-outlined",
          },
          name: "Счет 1",
          type: 1,
        },
        {
          _id: "2",
          balance: 500,
          currency: 3,
          description: "China",
          icon: {
            color: "#00BCD4",
            component: "wallet-outlined",
          },
          name: "Счет 2",
          type: 1,
        },
        {
          _id: "3",
          balance: 1200,
          currency: 1,
          description: "Я хочу пиццы",
          icon: {
            color: "#FF9800",
            component: "gold-outlined",
          },
          name: "Долг 1",
          type: 2,
        },
        {
          _id: "4",
          balance: 250,
          currency: 5,
          description: "",
          icon: {
            color: "#9E9E9E",
            component: "bank-outlined",
          },
          name: "Сбережение 1",
          type: 3,
        },
      ],
      finances: [
        {
          assets: 2000,
          currency: 2,
          key: "ruble",
          liabilities: 0,
        },
        {
          assets: 500,
          currency: 3,
          key: "dollar",
          liabilities: 20,
        },
      ],
    });
  },
};

export default AccountsService;
