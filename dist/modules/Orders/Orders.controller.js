"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const Orders_server_1 = require("./Orders.server");
// Creating a category
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield Orders_server_1.OrderService.createOrder(req.body);
        res.send({
            status: "true",
            statusCode: 200,
            message: "Order created Successfully!",
            data: data,
        });
    }
    catch (error) {
        res.send(error);
    }
});
// Get all category
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield Orders_server_1.OrderService.getAllOrders();
        res.send({
            status: "true",
            statusCode: 200,
            message: "Orders retrieved successfully!",
            data: data,
        });
    }
    catch (error) {
        res.send(error);
    }
});
const getSingleOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield Orders_server_1.OrderService.getSingleOrders(req.body);
        res.send({
            status: "true",
            statusCode: 200,
            message: "Order fetched successfully",
            data: data,
        });
    }
    catch (error) {
        res.send(error);
    }
});
const Orders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield Orders_server_1.OrderService.Orders(req.params.orderId);
        res.send({
            status: "true",
            statusCode: 200,
            message: "Specific orders fetched successfully",
            data: data,
        });
    }
    catch (error) {
        res.send(error);
    }
});
exports.OrderController = {
    createOrder,
    getAllOrders,
    getSingleOrders,
    Orders,
};
