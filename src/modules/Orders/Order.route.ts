import express from "express";
import { OrderController } from "./Orders.controller";
import { AuthService } from "../auth/authentication";
const router = express.Router();

router.post(
  "/orders/create-order",
  AuthService.authenticateJWT,
  AuthService.authorizeCustomer,
  OrderController.createOrder
);
// router.get("/orders", OrderController.getAllOrders);
// router.get("/orders/:id", OrderController.getSingleOrders);
// router.patch("/orders/:orderId", OrderController.Orders);
// router.delete("/profile/", CategoryController.deleteCategories);

export const OrdersRoutes = router;
