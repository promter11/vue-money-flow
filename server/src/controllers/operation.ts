import { Request, Response } from "express";

import OperationModel from "../models/operation";

const getOperations = async (req: Request, res: Response) => {
  try {
    const data = await OperationModel.find();

    res.send(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createOperation = async (req: Request, res: Response) => {
  try {
    const account = new OperationModel(req.body);

    await account.save();

    res.status(201).send(account);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateOperation = async (req: Request, res: Response) => {
  try {
    const account = await OperationModel.findByIdAndUpdate(
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

const deleteOperation = async (req: Request, res: Response) => {
  try {
    await OperationModel.findByIdAndDelete(req.params.id);

    res.status(204).send();
  } catch (error) {
    res.status(500).json(error);
  }
};

export { getOperations, createOperation, updateOperation, deleteOperation };
