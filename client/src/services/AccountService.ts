import { IAccount } from "@/interfaces";
import ApiService from "@/services/ApiService";

class AccountService {
  async getAccounts() {
    return ApiService.get<void, { data: IAccount[] }>("/accounts");
  }

  async createAccount(params: Omit<IAccount, "_id">) {
    return ApiService.post<void, { data: IAccount }>("/accounts", params);
  }

  async updateAccount(
    id: IAccount["_id"],
    params: Partial<Omit<IAccount, "_id">>
  ) {
    return ApiService.patch<void, { data: IAccount }>(
      `/accounts/${id}`,
      params
    );
  }

  async deleteAccount(id: IAccount["_id"]) {
    return ApiService.delete<void, void>(`/accounts/${id}`);
  }
}

export default new AccountService();
