import { ICategory } from "@/interfaces";
import ApiService from "@/services/ApiService";

class CategoryService {
  async fetchCategories() {
    return ApiService.get<void, { data: ICategory[] }>("/api/categories");
  }

  async createCategory(params: Omit<ICategory, "_id">) {
    return ApiService.post<void, { data: ICategory }>(
      "/api/categories",
      params
    );
  }

  async updateCategory(
    id: ICategory["_id"],
    params: Partial<Omit<ICategory, "_id">>
  ) {
    return ApiService.patch<void, { data: ICategory }>(
      `/api/categories/${id}`,
      params
    );
  }

  async deleteCategory(id: ICategory["_id"]) {
    return ApiService.delete<void, void>(`/api/categories/${id}`);
  }
}

export default new CategoryService();
