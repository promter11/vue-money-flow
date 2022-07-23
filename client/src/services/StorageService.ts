const TOKEN_KEY = "token";

class StorageService {
  getToken() {
    return localStorage.getItem(TOKEN_KEY) ?? null;
  }

  setToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
  }

  removeToken() {
    localStorage.removeItem(TOKEN_KEY);
  }
}

export default new StorageService();
