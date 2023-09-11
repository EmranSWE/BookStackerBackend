import express from "express";
import { BookController } from "./books.controller";
const router = express.Router();

// router.get("/users", BookController.getAllUsers);
// router.patch("/users/:id", BookController.updateSingleUser);
router.post("/books/create-book", BookController.createBook);
// router.post("/auth/signin", BookController.loginUser);

// router.get("/users/:id", UserController.getSingleUsers);
// router.delete("/users/:id", UserController.deleteSingleUser);

export const BookRoutes = router;
