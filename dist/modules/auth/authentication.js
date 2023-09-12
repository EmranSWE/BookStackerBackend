"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Authentication Users
const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.send(403);
            }
            req.user = user;
            next();
        });
    }
    else {
        res.sendStatus(401);
    }
};
const authorizeAdmin = (req, res, next) => {
    if (req.user.role !== "admin") {
        return res
            .status(403)
            .json({ success: false, message: "Access forbidden: Admins only" });
    }
    next();
};
const authorizeCustomer = (req, res, next) => {
    if (req.user.role !== "customer") {
        return res
            .status(403)
            .json({ success: false, message: "Access forbidden: Customer only" });
    }
    next();
};
exports.AuthService = {
    authenticateJWT,
    authorizeAdmin,
    authorizeCustomer,
};
