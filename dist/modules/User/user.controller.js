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
exports.UserController = void 0;
const user_service_1 = require("./user.service");
// Creating a user
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        const data = yield user_service_1.UserService.createUser(req.body);
        res.send({
            status: "true",
            statusCode: 200,
            message: " User created Successfully!",
            data: data,
        });
    }
    catch (error) {
        res.send(error);
    }
});
// Login a user
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield user_service_1.UserService.loginUser(req.body);
        res.send({
            status: "true",
            statusCode: 200,
            message: "User login Successfully!",
            data: data,
        });
    }
    catch (error) {
        res.send(error);
    }
});
//Get all user
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield user_service_1.UserService.getAllUser();
        res.send({
            status: "true",
            statusCode: 200,
            message: "Users retrieved successfully!",
            data: data,
        });
    }
    catch (error) {
        res.send(error);
    }
});
const getSingleUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.params.id);
    try {
        const data = yield user_service_1.UserService.getSingleUser(req.params.id);
        res.send({
            status: "true",
            statusCode: 200,
            message: "Users gets successfully!",
            data: data,
        });
    }
    catch (error) {
        res.send(error);
    }
});
const getProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield user_service_1.UserService.getProfile(req.params.id);
        res.send({
            status: "true",
            statusCode: 200,
            message: "Users profile gets successfully!",
            data: data,
        });
    }
    catch (error) {
        res.send(error);
    }
});
const updateSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.params.id);
    try {
        const data = yield user_service_1.UserService.updateSingleUser(req.params.id, req.body);
        res.send({
            status: "true",
            statusCode: 200,
            message: "Users update successfully!",
            data: data,
        });
    }
    catch (error) {
        res.send(error);
    }
});
const deleteSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield user_service_1.UserService.deleteSingleUser(req.params.id);
        res.send({
            status: "true",
            statusCode: 200,
            message: "Users deleted successfully!",
            data: data,
        });
    }
    catch (error) {
        res.send(error);
    }
});
exports.UserController = {
    createUser,
    loginUser,
    getAllUsers,
    getSingleUsers,
    updateSingleUser,
    deleteSingleUser,
    getProfile,
};
