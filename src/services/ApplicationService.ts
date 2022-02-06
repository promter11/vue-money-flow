import { ICurrency } from "@/interfaces";

const ApplicationService = {
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

export default ApplicationService;
