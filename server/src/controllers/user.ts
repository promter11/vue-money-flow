import { Request, Response } from "express";

import UserModel from "../models/user";

const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    await user.save({ validateModifiedOnly: true });

    res.send(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

export { updateUser };
