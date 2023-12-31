"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const user_route_1 = require("./modules/User/user.route");
const books_route_1 = require("./modules/Books/books.route");
const category_route_1 = require("./modules/category/category.route");
const Order_route_1 = require("./modules/Orders/Order.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/v1", user_route_1.UserRoutes);
app.use("/api/v1", category_route_1.CategoryRoutes);
app.use("/api/v1", books_route_1.BookRoutes);
app.use("/api/v1", Order_route_1.OrdersRoutes);
exports.default = app;
