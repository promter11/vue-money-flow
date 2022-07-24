import { Request, Response } from "express";

import OperationModel from "../models/operation";

class OperationController {
  async fetchOperations(req: Request, res: Response) {
    try {
      const data = await OperationModel.find();

      res.send(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new OperationController();
