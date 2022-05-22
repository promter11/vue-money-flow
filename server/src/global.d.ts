declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    SERVER_URL: string;
    SERVER_PORT: string;
    DATABASE_URL: string;
    ACCESS_TOKEN_SECRET_KEY: string;
    ACCESS_TOKEN_EXPIRES_IN: string;
    REFRESH_TOKEN_SECRET_KEY: string;
    REFRESH_TOKEN_EXPIRES_IN: string;
  }
}
