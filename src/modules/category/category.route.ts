import express from "express";
import { CategoryController } from "./category.controller";
const router = express.Router();

// router.get("/users", BookController.getAllUsers);
// router.patch("/users/:id", BookController.updateSingleUser);
router.post("/categories/create-category", CategoryController.createCategory);
// router.post("/auth/signin", BookController.loginUser);

// router.get("/users/:id", UserController.getSingleUsers);
// router.delete("/users/:id", UserController.deleteSingleUser);

export const CategoryRoutes = router;
