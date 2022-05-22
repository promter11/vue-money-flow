import { Request, Response } from "express";

import AccountTypesModel from "../models/account-type";
import CategoryTypesModel from "../models/category-type";
import CurrenciesModel from "../models/currency";

const getCommonInfo = async (req: Request, res: Response) => {
  try {
    const accountTypes = await AccountTypesModel.find();
    const categoryTypes = await CategoryTypesModel.find();
    const currencies = await CurrenciesModel.find();

    res.send({ accountTypes, categoryTypes, currencies });
  } catch (error) {
    res.status(500).json(error);
  }
};

export { getCommonInfo };
