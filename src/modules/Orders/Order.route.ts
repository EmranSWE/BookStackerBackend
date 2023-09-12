import express from "express";
import { OrderController } from "./Orders.controller";
const router = express.Router();

router.get("/orders/create-order", OrderController.createOrder);
router.get("/orders", OrderController.getAllOrders);
router.get("/orders/:id", OrderController.getSingleOrders);
router.patch("/orders/:orderId", OrderController.Orders);
// router.delete("/profile/", CategoryController.deleteCategories);

export const CategoryRoutes = router;
