import { Router } from "express";

import {
  getAccounts,
  createAccount,
  updateAccount,
  deleteAccount,
  login,
  logout,
  token,
  register,
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
import { authenticateJWT } from "../middlewares";

const router = Router();

router.get("/accounts", authenticateJWT, getAccounts);
router.post("/accounts", authenticateJWT, createAccount);
router.patch("/accounts/:id", authenticateJWT, updateAccount);
router.delete("/accounts/:id", authenticateJWT, deleteAccount);
router.post("/auth/login", login);
router.post("/auth/logout", logout);
router.post("/auth/token", token);
router.post("/auth/register", register);
router.get("/common", authenticateJWT, getCommonInfo);
router.get("/categories", authenticateJWT, getCategories);
router.post("/categories", authenticateJWT, createCategory);
router.patch("/categories/:id", authenticateJWT, updateCategory);
router.delete("/categories/:id", authenticateJWT, deleteCategory);
router.get("/operations", authenticateJWT, getOperations);
router.post("/operations", authenticateJWT, createOperation);
router.put("/operations/:id", authenticateJWT, updateOperation);
router.delete("/operations/:id", authenticateJWT, deleteOperation);

export default router;
