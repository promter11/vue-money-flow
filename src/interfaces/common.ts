export type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

export interface ICurrency {
  label: string;
  sign: string;
  value: number;
}
