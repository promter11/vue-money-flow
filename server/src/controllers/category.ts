import { Request, Response } from "express";

import CategoryModel from "../models/category";

class CategoryController {
  async fetchCategories(req: Request, res: Response) {
    try {
      const data = await CategoryModel.find();

      res.send(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async createCategory(req: Request, res: Response) {
    try {
      const account = new CategoryModel(req.body);

      await account.save();

      res.status(201).send(account);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async updateCategory(req: Request, res: Response) {
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
  }

  async deleteCategory(req: Request, res: Response) {
    try {
      await CategoryModel.findByIdAndDelete(req.params.id);

      res.status(204).send();
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new CategoryController();
