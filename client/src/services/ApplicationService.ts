import { ICommon } from "@/interfaces";
import ApiService from "@/services/ApiService";

class ApplicationService {
  async getCommonInfo() {
    return ApiService.get<void, { data: ICommon }>("/api/common");
  }
}

export default new ApplicationService();
