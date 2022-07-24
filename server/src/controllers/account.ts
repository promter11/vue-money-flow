import { Request, Response } from "express";

import AccountModel from "../models/account";

class AccountController {
  async fetchAccounts(req: Request, res: Response) {
    try {
      const data = await AccountModel.find();

      res.send(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async createAccount(req: Request, res: Response) {
    try {
      const account = new AccountModel(req.body);

      await account.save();

      res.status(201).send(account);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async updateAccount(req: Request, res: Response) {
    try {
      const account = await AccountModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );

      await account.save();

      res.send(account);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async deleteAccount(req: Request, res: Response) {
    try {
      await AccountModel.findByIdAndDelete(req.params.id);

      res.status(204).send();
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new AccountController();
