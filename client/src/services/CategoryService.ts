import { ICategory, ICategoryType } from "@/interfaces";

const CategoryService = {
  async getCategories(): Promise<ICategory[]> {
    return Promise.resolve([
      {
        balance: 400,
        color: "#F44336",
        icon: "credit-card-outlined",
        id: 1,
        name: "Продукты",
        type: 2,
      },
      {
        balance: 20,
        color: "#E91E63",
        icon: "credit-card-outlined",
        id: 2,
        name: "Недвижимость",
        type: 2,
      },
      {
        balance: 320,
        color: "#9C27B0",
        icon: "credit-card-outlined",
        id: 3,
        name: "Транспорт",
        type: 2,
      },
      {
        balance: 50,
        color: "#673AB7",
        icon: "credit-card-outlined",
        id: 4,
        name: "Здоровье",
        type: 2,
      },
      {
        balance: 0,
        color: "#3F51B5",
        icon: "credit-card-outlined",
        id: 5,
        name: "Досуг",
        type: 2,
      },
      {
        balance: 0,
        color: "#2196F3",
        icon: "credit-card-outlined",
        id: 6,
        name: "Подарки",
        type: 2,
      },
      {
        balance: 1000,
        color: "#03A9F4",
        icon: "credit-card-outlined",
        id: 7,
        name: "Покупки",
        type: 2,
      },
      {
        balance: 90000,
        color: "#00BCD4",
        icon: "credit-card-outlined",
        id: 8,
        name: "Зарплата",
        type: 1,
      },
    ]);
  },
  async getCategoryTypes(): Promise<ICategoryType[]> {
    return Promise.resolve([
      { label: "Доходы", value: 1 },
      { label: "Расходы", value: 2 },
    ]);
  },
};

export default CategoryService;
