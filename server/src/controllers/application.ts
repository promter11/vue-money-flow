import { Request, Response } from "express";

import AccountTypesModel from "../models/account-type";
import CategoryTypesModel from "../models/category-type";
import CurrenciesModel from "../models/currency";

class ApplicationController {
  async fetchAccountTypes(req: Request, res: Response) {
    try {
      const data = await AccountTypesModel.find();

      res.send(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async fetchCategoryTypes(req: Request, res: Response) {
    try {
      const data = await CategoryTypesModel.find();

      res.send(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async fetchCurrencies(req: Request, res: Response) {
    try {
      const data = await CurrenciesModel.find();

      res.send(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new ApplicationController();
