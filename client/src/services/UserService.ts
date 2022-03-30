import { IUser } from "@/interfaces";

const UserService = {
  async getUser(): Promise<IUser> {
    return Promise.resolve({
      balance: 12400.4,
      currency_id: 2,
      email: "alexandr.samylin@gmail.com",
      first_name: "Alexandr",
      language: "ru",
      last_name: "Samylin",
    });
  },
};

export default UserService;
