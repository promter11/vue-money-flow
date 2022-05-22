import { Router } from "express";

import {
  getAccounts,
  createAccount,
  updateAccount,
  deleteAccount,
  login,
  logout,
  refresh,
  register,
  updateUser,
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
import { authenticate } from "../middlewares";

const router = Router();

router.get("/accounts", authenticate, getAccounts);
router.post("/accounts", authenticate, createAccount);
router.patch("/accounts/:id", authenticate, updateAccount);
router.delete("/accounts/:id", authenticate, deleteAccount);
router.post("/auth/login", login);
router.post("/auth/logout", logout);
router.get("/auth/refresh", refresh);
router.post("/auth/register", register);
router.get("/common", authenticate, getCommonInfo);
router.get("/categories", authenticate, getCategories);
router.post("/categories", authenticate, createCategory);
router.patch("/categories/:id", authenticate, updateCategory);
router.delete("/categories/:id", authenticate, deleteCategory);
router.get("/operations", authenticate, getOperations);
router.post("/operations", authenticate, createOperation);
router.put("/operations/:id", authenticate, updateOperation);
router.delete("/operations/:id", authenticate, deleteOperation);
router.put("/users/:id", authenticate, updateUser);

export default router;
