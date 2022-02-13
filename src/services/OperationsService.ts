import { IOperation } from "@/interfaces";

const OperationsService = {
  async getOperations(): Promise<IOperation[]> {
    return Promise.resolve([
      {
        date: "2022-02-12T19:14:46",
        items: [
          { balance: 100, category_name: "Продукты", currency_id: 2, type: 1 },
          { balance: 250, category_name: "Здоровье", currency_id: 5, type: 1 },
          { balance: 10.9, category_name: "Продукты", currency_id: 2, type: 2 },
        ],
      },
      {
        date: "1995-12-17T03:24:00",
        items: [
          { balance: 205, category_name: "Досуг", currency_id: 1, type: 2 },
        ],
      },
      {
        date: "1997-06-12T03:12:44",
        items: [
          {
            balance: 15,
            category_name: "Недвижимость",
            currency_id: 4,
            type: 1,
          },
          { balance: 11.43, category_name: "Досуг", currency_id: 2, type: 1 },
        ],
      },
    ]);
  },
};

export default OperationsService;
