import express from "express";
import { UserController } from "./user.controller";
import { ENUM_USER_ROLE } from "../../enums/user";
import { AuthService } from "../auth/authentication";
const router = express.Router();

router.get(
  "/profile",
  AuthService.authenticateJWT,
  AuthService.authorizeAdmin,
  UserController.getProfile
);
router.get(
  "/users",
  AuthService.authenticateJWT,
  AuthService.authorizeAdmin,
  UserController.getAllUsers
);
router.patch(
  "/users/:id",
  AuthService.authenticateJWT,
  AuthService.authorizeAdmin,
  UserController.updateSingleUser
);
router.post("/auth/signup", UserController.createUser);
router.post("/auth/signin", UserController.loginUser);

router.get(
  "/users/:id",
  AuthService.authenticateJWT,
  AuthService.authorizeAdmin,
  UserController.getSingleUsers
);
router.delete(
  "/users/:id",
  AuthService.authenticateJWT,
  AuthService.authorizeAdmin,
  UserController.deleteSingleUser
);

export const UserRoutes = router;
