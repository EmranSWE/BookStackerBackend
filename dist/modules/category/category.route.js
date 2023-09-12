"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const category_controller_1 = require("./category.controller");
const router = express_1.default.Router();
router.get("/categories", category_controller_1.CategoryController.getAllCategory);
router.get("/categories/:id", category_controller_1.CategoryController.getSingleCategory);
router.post("/categories/create-category", category_controller_1.CategoryController.createCategory);
router.patch("/categories/:id", category_controller_1.CategoryController.updateSingleCategory);
router.delete("/categories/:id", category_controller_1.CategoryController.deleteCategories);
exports.CategoryRoutes = router;
