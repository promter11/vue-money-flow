import { IUser } from "@/interfaces";

const UserService = {
  async getUser(): Promise<IUser> {
    return Promise.resolve({
      balance: 12400.4,
      currency_id: 2,
      name: "Alexandr Samylin",
    });
  },
};

export default UserService;
