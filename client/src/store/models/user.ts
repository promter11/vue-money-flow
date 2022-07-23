import { IUser } from "@/interfaces";

class UserModel {
  constructor() {
    return {
      balance: 0,
      currency: 2,
      email: "",
      firstName: "",
      lastName: "",
    };
  }
}

export default new UserModel() as IUser;
