import { Router } from "express";
import { authenticate } from "../middlewares";

import AccountController from "../controllers/account";
import ApplicationController from "../controllers/application";
import AuthController from "../controllers/auth";
import CategoryController from "../controllers/category";
import OperationController from "../controllers/operation";
import UserController from "../controllers/user";

const router = Router();

router.get("/accounts", authenticate, AccountController.fetchAccounts);
router.post("/accounts", authenticate, AccountController.createAccount);
router.patch("/accounts/:id", authenticate, AccountController.updateAccount);
router.delete("/accounts/:id", authenticate, AccountController.deleteAccount);
router.get("/account-types", ApplicationController.fetchAccountTypes);
router.get("/category-types", ApplicationController.fetchCategoryTypes);
router.get("/currencies", ApplicationController.fetchCurrencies);
router.get("/auth/me", AuthController.me);
router.post("/auth/login", AuthController.login);
router.post("/auth/logout", AuthController.logout);
router.get("/auth/refresh", AuthController.refresh);
router.post("/auth/register", AuthController.register);
router.get("/categories", authenticate, CategoryController.fetchCategories);
router.post("/categories", authenticate, CategoryController.createCategory);
router.patch(
  "/categories/:id",
  authenticate,
  CategoryController.updateCategory
);
router.delete(
  "/categories/:id",
  authenticate,
  CategoryController.deleteCategory
);
router.get("/operations", authenticate, OperationController.fetchOperations);
router.put("/users/:id", authenticate, UserController.updateUser);

export default router;
