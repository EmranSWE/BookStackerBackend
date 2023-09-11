import express from "express";
import { BookController } from "./books.controller";
const router = express.Router();
router.patch("/books/:id", BookController.updateSingleBook);

router.post("/books/create-book", BookController.createBook);
router.get("/books/", BookController.getAllBooks);
router.get(
  "/books/:categoryId/category",
  BookController.getSingleBookByCategory
);
router.get("/books/:id", BookController.getSingleBook);
router.delete("/books/:id", BookController.deleteABook);

export const BookRoutes = router;
