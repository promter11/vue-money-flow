import { Router } from "express";

import {
  getAccounts,
  createAccount,
  updateAccount,
  deleteAccount,
  getCommonInfo,
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  getOperations,
  createOperation,
  updateOperation,
  deleteOperation,
} from "../controllers";

const router = Router();

router.get("/accounts", getAccounts);
router.post("/accounts", createAccount);
router.patch("/accounts/:id", updateAccount);
router.delete("/accounts/:id", deleteAccount);
router.get("/common", getCommonInfo);
router.get("/categories", getCategories);
router.post("/categories", createCategory);
router.patch("/categories/:id", updateCategory);
router.delete("/categories/:id", deleteCategory);
router.get("/operations", getOperations);
router.post("/operations", createOperation);
router.put("/operations/:id", updateOperation);
router.delete("/operations/:id", deleteOperation);

export default router;
