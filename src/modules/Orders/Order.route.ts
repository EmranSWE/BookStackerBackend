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
router.get(
  "/orders",
  AuthService.authenticateJWT,
  AuthService.authorizeAdmin,
  OrderController.getAllOrders
);
router.get(
  "/orders",
  AuthService.authenticateJWT,
  AuthService.authorizeCustomer,
  OrderController.getSingleOrders
);
router.get(
  "/orders/:orderId",
  AuthService.authenticateJWT,
  AuthService.authorizeCustomer,
  OrderController.Orders
);
// router.delete("/profile/", CategoryController.deleteCategories);

export const OrdersRoutes = router;
