import { Request, Response } from "express";

import AccountModel from "../models/account";

const getAccounts = async (req: Request, res: Response) => {
  try {
    const data = await AccountModel.find();

    res.send(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createAccount = async (req: Request, res: Response) => {
  try {
    const account = new AccountModel(req.body);

    await account.save();

    res.status(201).send(account);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateAccount = async (req: Request, res: Response) => {
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
};

const deleteAccount = async (req: Request, res: Response) => {
  try {
    await AccountModel.findByIdAndDelete(req.params.id);

    res.status(204).send();
  } catch (error) {
    res.status(500).json(error);
  }
};

export { getAccounts, createAccount, updateAccount, deleteAccount };
