"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersRoutes = void 0;
const express_1 = __importDefault(require("express"));
const Orders_controller_1 = require("./Orders.controller");
const authentication_1 = require("../auth/authentication");
const router = express_1.default.Router();
router.post("/orders/create-order", authentication_1.AuthService.authenticateJWT, authentication_1.AuthService.authorizeCustomer, Orders_controller_1.OrderController.createOrder);
router.get("/orders", authentication_1.AuthService.authenticateJWT, authentication_1.AuthService.authorizeAdmin, Orders_controller_1.OrderController.getAllOrders);
router.get("/orders", authentication_1.AuthService.authenticateJWT, authentication_1.AuthService.authorizeCustomer, Orders_controller_1.OrderController.getSingleOrders);
router.get("/orders/:orderId", authentication_1.AuthService.authenticateJWT, authentication_1.AuthService.authorizeCustomer, Orders_controller_1.OrderController.Orders);
// router.delete("/profile/", CategoryController.deleteCategories);
exports.OrdersRoutes = router;
