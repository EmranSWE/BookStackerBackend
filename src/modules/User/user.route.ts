import express from "express";
import { UserController } from "./user.controller";
const router = express.Router();

router.patch("/users/:id", UserController.updateSingleUser);
router.post("/auth/signup", UserController.createUser);
router.get("/users", UserController.getAllUsers);
router.get("/users/:id", UserController.getSingleUsers);
router.delete("/users/:id", UserController.deleteSingleUser);

export const UserRoutes = router;
