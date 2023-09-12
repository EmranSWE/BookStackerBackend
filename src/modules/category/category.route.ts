import express from "express";
import { CategoryController } from "./category.controller";
import { AuthService } from "../auth/authentication";
const router = express.Router();

router.get("/categories", CategoryController.getAllCategory);
router.get("/categories/:id", CategoryController.getSingleCategory);
router.post(
  "/categories/create-category",
  AuthService.authenticateJWT,
  AuthService.authorizeAdmin,
  CategoryController.createCategory
);
router.patch(
  "/categories/:id",
  AuthService.authenticateJWT,
  AuthService.authorizeAdmin,
  CategoryController.updateSingleCategory
);
router.delete(
  "/categories/:id",
  AuthService.authenticateJWT,
  AuthService.authorizeAdmin,
  CategoryController.deleteCategories
);

export const CategoryRoutes = router;
