import ApiService from "@/services/ApiService";

class AuthService {
  async login(params: { email: string; password: string }) {
    return ApiService.post<
      void,
      { data: { accessToken: string; refreshToken: string } }
    >("/api/auth/login", params);
  }

  async logout() {
    return ApiService.post<void, void>("/api/auth/logout");
  }

  async refresh() {
    return ApiService.get<
      void,
      { data: { accessToken: string; refreshToken: string } }
    >("/api/auth/refresh");
  }

  async register(params: { email: string; password: string }) {
    return ApiService.post<
      void,
      { data: { accessToken: string; refreshToken: string } }
    >("/api/auth/register", params);
  }
}

export default new AuthService();
