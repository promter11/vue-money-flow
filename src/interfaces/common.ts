export type Dialog = "upsert" | "remove";

export type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};
