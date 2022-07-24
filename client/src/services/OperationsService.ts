import { IOperation } from "@/interfaces";
import ApiService from "@/services/ApiService";

class OperationsService {
  async fetchOperations() {
    return ApiService.get<void, { data: IOperation[] }>("/api/operations");
  }
}

export default new OperationsService();
