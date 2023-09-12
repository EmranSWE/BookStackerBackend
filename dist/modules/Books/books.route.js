"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const books_controller_1 = require("./books.controller");
const router = express_1.default.Router();
router.patch("/books/:id", books_controller_1.BookController.updateSingleBook);
router.post("/books/create-book", books_controller_1.BookController.createBook);
router.get("/books/", books_controller_1.BookController.getAllBooks);
router.get("/books/:categoryId/category", books_controller_1.BookController.getSingleBookByCategory);
router.get("/books/:id", books_controller_1.BookController.getSingleBook);
router.delete("/books/:id", books_controller_1.BookController.deleteABook);
exports.BookRoutes = router;
