import express from "express";
import { CategoryController } from "./category.controller";
const router = express.Router();

router.get("/categories", CategoryController.getAllCategory);
router.get("/categories/:id", CategoryController.getSingleCategory);
router.post("/categories/create-category", CategoryController.createCategory);
router.patch("/categories/:id", CategoryController.updateSingleCategory);
router.delete("/categories/:id", CategoryController.deleteCategories);

export const CategoryRoutes = router;
