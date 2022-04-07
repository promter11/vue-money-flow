export interface IAccountType {
  _id: string;
  label: string;
  value: number;
}

export interface ICategoryType {
  _id: string;
  label: string;
  value: number;
}

export interface ICurrency {
  _id: string;
  label: string;
  sign: string;
  value: number;
}

export interface ICommon {
  accountTypes: IAccountType[];
  categoryTypes: ICategoryType[];
  currencies: ICurrency[];
}
