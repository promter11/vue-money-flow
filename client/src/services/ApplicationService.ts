import { IAccountType, ICategoryType, ICurrency } from "@/interfaces";
import ApiService from "@/services/ApiService";

class CommonService {
  async fetchAccountTypes() {
    return ApiService.get<void, { data: IAccountType[] }>("/api/account-types");
  }

  async fetchCategoryTypes() {
    return ApiService.get<void, { data: ICategoryType[] }>(
      "/api/category-types"
    );
  }

  async fetchCurrencies() {
    return ApiService.get<void, { data: ICurrency[] }>("/api/currencies");
  }
}

export default new CommonService();
