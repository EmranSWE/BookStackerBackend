"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const books_server_1 = require("./books.server");
// Creating a user
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield books_server_1.BookService.createBook(req.body);
        res.send({
            status: "true",
            statusCode: 200,
            message: "Book created Successfully!",
            data: data,
        });
    }
    catch (error) {
        res.send(error);
    }
});
//Get all user
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //   console.log("Get All books", req.query.page);
    try {
        const data = yield books_server_1.BookService.getAllBooks(req.query);
        res.send({
            status: "true",
            statusCode: 200,
            message: "Books retrieved successfully!",
            data: data,
        });
    }
    catch (error) {
        res.send(error);
    }
});
const getSingleBookByCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield books_server_1.BookService.getSingleBookByCategory(req.params.id);
        res.send({
            status: "true",
            statusCode: 200,
            message: "Users gets successfully!",
            data: data,
        });
    }
    catch (error) {
        res.send(error);
    }
});
const getSingleBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield books_server_1.BookService.getSingleBook(req.params.id);
        res.send({
            status: "true",
            statusCode: 200,
            message: "Books fetched successfully!",
            data: data,
        });
    }
    catch (error) {
        res.send(error);
    }
});
const updateSingleBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.params.id);
    try {
        const data = yield books_server_1.BookService.updateSingleBook(req.params.id, req.body);
        res.send({
            status: "true",
            statusCode: 200,
            message: "Books update successfully!",
            data: data,
        });
    }
    catch (error) {
        res.send(error);
    }
});
const deleteABook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield books_server_1.BookService.deleteABook(req.params.id);
        res.send({
            status: "true",
            statusCode: 200,
            message: "Books deleted successfully!",
            data: data,
        });
    }
    catch (error) {
        res.send(error);
    }
});
exports.BookController = {
    createBook,
    getAllBooks,
    getSingleBookByCategory,
    getSingleBook,
    updateSingleBook,
    deleteABook,
};
