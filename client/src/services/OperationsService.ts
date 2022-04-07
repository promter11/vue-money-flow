import { IOperation } from "@/interfaces";

const OperationsService = {
  async getOperations(): Promise<IOperation[]> {
    return Promise.resolve([
      {
        _id: "1",
        date: "2022-02-12T19:14:46",
        items: [
          { balance: 100, category: 3, currency: 2, type: 1 },
          { balance: 250, category: 5, currency: 5, type: 1 },
          { balance: 10.9, category: 7, currency: 2, type: 2 },
        ],
      },
      {
        _id: "2",
        date: "1995-12-17T03:24:00",
        items: [{ balance: 205, category: 2, currency: 1, type: 2 }],
      },
      {
        _id: "3",
        date: "1997-06-12T03:12:44",
        items: [
          {
            balance: 15,
            category: 4,
            currency: 4,
            type: 1,
          },
          { balance: 11.43, category: 2, currency: 2, type: 1 },
        ],
      },
    ]);
  },
};

export default OperationsService;
