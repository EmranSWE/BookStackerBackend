"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const authentication_1 = require("../auth/authentication");
const router = express_1.default.Router();
router.get("/users", authentication_1.AuthService.authenticateJWT, authentication_1.AuthService.authorizeAdmin, user_controller_1.UserController.getAllUsers);
router.patch("/users/:id", authentication_1.AuthService.authenticateJWT, authentication_1.AuthService.authorizeAdmin, user_controller_1.UserController.updateSingleUser);
router.post("/auth/signup", user_controller_1.UserController.createUser);
router.post("/auth/signin", user_controller_1.UserController.loginUser);
router.get("/users/:id", authentication_1.AuthService.authenticateJWT, authentication_1.AuthService.authorizeAdmin, user_controller_1.UserController.getSingleUsers);
router.delete("/users/:id", authentication_1.AuthService.authenticateJWT, authentication_1.AuthService.authorizeAdmin, user_controller_1.UserController.deleteSingleUser);
exports.UserRoutes = router;
