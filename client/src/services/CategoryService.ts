import { ICategory } from "@/interfaces";

const CategoryService = {
  async getCategories(): Promise<ICategory[]> {
    return Promise.resolve([
      {
        _id: "1",
        balance: 400,
        color: "#F44336",
        icon: "credit-card-outlined",
        name: "Продукты",
        type: 2,
      },
      {
        _id: "2",
        balance: 20,
        color: "#E91E63",
        icon: "credit-card-outlined",
        name: "Недвижимость",
        type: 2,
      },
      {
        _id: "3",
        balance: 320,
        color: "#9C27B0",
        icon: "credit-card-outlined",
        name: "Транспорт",
        type: 2,
      },
      {
        _id: "4",
        balance: 50,
        color: "#673AB7",
        icon: "credit-card-outlined",
        name: "Здоровье",
        type: 2,
      },
      {
        _id: "5",
        balance: 0,
        color: "#3F51B5",
        icon: "credit-card-outlined",
        name: "Досуг",
        type: 2,
      },
      {
        _id: "6",
        balance: 0,
        color: "#2196F3",
        icon: "credit-card-outlined",
        name: "Подарки",
        type: 2,
      },
      {
        _id: "7",
        balance: 1000,
        color: "#03A9F4",
        icon: "credit-card-outlined",
        name: "Покупки",
        type: 2,
      },
      {
        _id: "8",
        balance: 90000,
        color: "#00BCD4",
        icon: "credit-card-outlined",
        name: "Зарплата",
        type: 1,
      },
    ]);
  },
};

export default CategoryService;
