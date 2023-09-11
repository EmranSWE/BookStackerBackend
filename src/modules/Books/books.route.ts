import express from "express";
import { BookController } from "./books.controller";
const router = express.Router();

router.post("/books/create-book", BookController.createBook);
router.get("/books/", BookController.getAllBooks);
router.get("/books/:categoryId", BookController.getSingleBookByCategory);

export const BookRoutes = router;
