import { IUser } from "@/interfaces";

const UserService = {
  async getUser(): Promise<IUser> {
    return Promise.resolve({
      balance: 12400.4,
      currency: 2,
      email: "alexandr.samylin@gmail.com",
      firstName: "Alexandr",
      lastName: "Samylin",
    });
  },
};

export default UserService;
