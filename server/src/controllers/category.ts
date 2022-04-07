import { Request, Response } from "express";

import CategoryModel from "../models/category";

const getCategories = async (req: Request, res: Response) => {
  try {
    const data = await CategoryModel.find();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createCategory = async (req: Request, res: Response) => {
  try {
    const account = new CategoryModel(req.body);

    await account.save();

    res.status(201).send(account);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateCategory = async (req: Request, res: Response) => {
  try {
    const account = await CategoryModel.findByIdAndUpdate(
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

const deleteCategory = async (req: Request, res: Response) => {
  try {
    await CategoryModel.findByIdAndDelete(req.params.id);

    res.status(204).send();
  } catch (error) {
    res.status(500).json(error);
  }
};

export { getCategories, createCategory, updateCategory, deleteCategory };
