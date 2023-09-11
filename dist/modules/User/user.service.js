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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const client_1 = require("@prisma/client");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const console_1 = require("console");
const prisma = new client_1.PrismaClient();
const round = process.env.BCRYPT_SALT_ROUNDS;
//Insert a new user to DB
const createUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const hashedPassword = yield bcrypt_1.default.hash(data.password, Number(round));
    const result = yield prisma.user.create({
        data: Object.assign(Object.assign({}, data), { password: hashedPassword }),
    });
    return result;
});
//Login a new user to DB
const loginUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = data;
    const isUserExist = yield prisma.user.findUnique({
        where: { email: email },
        select: {
            email: true,
            password: true,
            role: true,
        },
    });
    if (!isUserExist) {
        console.log("wronG pass or email");
        return console_1.error;
    }
    const isPasswordMatched = yield bcrypt_1.default.compare(password, isUserExist === null || isUserExist === void 0 ? void 0 : isUserExist.password);
    if (!isPasswordMatched) {
        console.log("wronG pass");
        return console_1.error;
    }
    console.log(isUserExist);
    //Create refresh token
    const accessToken = jsonwebtoken_1.default.sign({
        email: isUserExist === null || isUserExist === void 0 ? void 0 : isUserExist.email,
        role: isUserExist.role,
    }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
    // Refresh token
    const refreshToken = jsonwebtoken_1.default.sign({
        email: isUserExist === null || isUserExist === void 0 ? void 0 : isUserExist.email,
        role: isUserExist.role,
    }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
    });
    return { accessToken, refreshToken };
});
// Get all Users from DB
const getAllUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.user.findMany();
    return result;
});
// Get Single  User from DB
const getSingleUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.user.findFirst({
        where: {
            id: id,
        },
    });
    return result;
});
// Update Single  User from DB
const updateSingleUser = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("update", id, data);
    const result = yield prisma.user.update({
        where: {
            id: id,
        },
        data: data,
    });
    return result;
});
// Delete Single  User from DB
const deleteSingleUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.user.delete({
        where: {
            id: id,
        },
    });
    return result;
});
exports.UserService = {
    createUser,
    loginUser,
    getAllUser,
    getSingleUser,
    updateSingleUser,
    deleteSingleUser,
};
