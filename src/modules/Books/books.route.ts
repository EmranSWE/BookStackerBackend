import express from "express";
import { BookController } from "./books.controller";
const router = express.Router();

router.post("/books/create-book", BookController.createBook);

export const BookRoutes = router;
