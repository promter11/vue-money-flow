import { IAccount } from "@/interfaces";
import ApiService from "@/services/ApiService";

class AccountService {
  async fetchAccounts() {
    return ApiService.get<void, { data: IAccount[] }>("/api/accounts");
  }

  async createAccount(params: Omit<IAccount, "_id">) {
    return ApiService.post<void, { data: IAccount }>("/api/accounts", params);
  }

  async updateAccount(
    id: IAccount["_id"],
    params: Partial<Omit<IAccount, "_id">>
  ) {
    return ApiService.patch<void, { data: IAccount }>(
      `/api/accounts/${id}`,
      params
    );
  }

  async deleteAccount(id: IAccount["_id"]) {
    return ApiService.delete<void, void>(`/api/accounts/${id}`);
  }
}

export default new AccountService();
