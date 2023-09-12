import express from "express";
import { BookController } from "./books.controller";
import { AuthService } from "../auth/authentication";
const router = express.Router();
router.patch("/books/:id", BookController.updateSingleBook);

router.post(
  "/books/create-book",
  AuthService.authenticateJWT,
  AuthService.authorizeAdmin,
  BookController.createBook
);
router.get("/books/", BookController.getAllBooks);
router.get(
  "/books/:categoryId/category",
  BookController.getSingleBookByCategory
);
router.get(
  "/books/:id",
  AuthService.authenticateJWT,
  AuthService.authorizeAdmin,
  BookController.getSingleBook
);
router.delete(
  "/books/:id",
  AuthService.authenticateJWT,
  AuthService.authorizeAdmin,
  BookController.deleteABook
);

export const BookRoutes = router;
