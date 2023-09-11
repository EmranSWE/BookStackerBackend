import express from "express";
import { UserController } from "./user.controller";
import { ENUM_USER_ROLE } from "../../enums/user";
const router = express.Router();

router.get("/users", UserController.getAllUsers);
router.patch("/users/:id", UserController.updateSingleUser);
router.post("/auth/signup", UserController.createUser);
router.post("/auth/signin", UserController.loginUser);

router.get("/users/:id", UserController.getSingleUsers);
router.delete("/users/:id", UserController.deleteSingleUser);

export const UserRoutes = router;
