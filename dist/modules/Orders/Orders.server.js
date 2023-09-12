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
exports.OrderService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createOrder = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Creating order with data:", data);
        const result = yield prisma.order.create({
            data: Object.assign({}, data),
        });
        console.log("Order successfully created:", result);
        return result;
    }
    catch (error) {
        console.error("Error creating order:", error);
        throw error;
    }
});
// Get all Users from DB
const getAllOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.order.findMany();
    return result;
});
// Get Single Orders from DB
const getSingleOrders = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("single user id", id);
    const result = yield prisma.order.findMany({
        where: {
            id: id,
        },
    });
    return result;
});
// Get Single  Orders from DB
const Orders = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("order service", id);
    const result = yield prisma.order.findMany({
        where: {
            id: id,
        },
    });
    return result;
});
exports.OrderService = {
    createOrder,
    getAllOrders,
    getSingleOrders,
    Orders,
};
