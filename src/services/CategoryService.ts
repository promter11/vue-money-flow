import { ICategory, ICategoryType } from "@/interfaces";

const CategoryService = {
  async getCategories(): Promise<ICategory[]> {
    return Promise.resolve([
      {
        balance: 400,
        id: 1,
        name: "Продукты",
        type: 2,
      },
      {
        balance: 20,
        id: 2,
        name: "Недвижимость",
        type: 2,
      },
      {
        balance: 320,
        id: 3,
        name: "Транспорт",
        type: 2,
      },
      {
        balance: 50,
        id: 4,
        name: "Здоровье",
        type: 2,
      },
      {
        balance: 0,
        id: 5,
        name: "Досуг",
        type: 2,
      },
      {
        balance: 0,
        id: 6,
        name: "Подарки",
        type: 2,
      },
      {
        balance: 1000,
        id: 7,
        name: "Покупки",
        type: 2,
      },
      {
        balance: 90000,
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
