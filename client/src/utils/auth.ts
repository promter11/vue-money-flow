const decodeJWT = (token: string): Record<any, any> => {
  const [, payload = ""] = token.split(".");
  return JSON.parse(atob(payload) || "{}");
};

export { decodeJWT };
