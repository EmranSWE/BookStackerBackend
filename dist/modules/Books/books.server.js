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
exports.BookService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createBook = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.book.create({
        data: data,
        include: {
            category: true,
        },
    });
    return result;
});
const getAllBooks = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const page = options.page || 1;
    console.log(options);
    const size = 10;
    const sortBy = options.sortBy || "title";
    const sortOrder = options.sortOrder || "asc";
    const skip = (page - 1) * size;
    let where = {};
    if (options.minPrice !== undefined) {
        where.price = Object.assign(Object.assign({}, where.price), { gte: options.minPrice });
    }
    const totalBooks = yield prisma.book.count();
    const totalPages = Math.ceil(totalBooks / size);
    const books = yield prisma.book.findMany({
        where: where,
        skip: skip,
        take: size,
        orderBy: {
            [sortBy]: sortOrder,
        },
    });
    return {
        page: page,
        size: size,
        total: totalBooks,
        totalPages: totalPages,
        data: books,
    };
});
// Get Single  User from DB
const getSingleBookByCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id);
    const result = yield prisma.book.findMany({
        where: {
            id: id,
        },
    });
    return result;
});
const getSingleBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.book.findFirst({
        where: {
            id: id,
        },
    });
    return result;
});
// Update Single  User from DB
const updateSingleBook = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.book.update({
        where: {
            id: id,
        },
        data: data,
    });
    return result;
});
// Delete Single  User from DB
const deleteABook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.book.delete({
        where: {
            id: id,
        },
    });
    return result;
});
exports.BookService = {
    createBook,
    getAllBooks,
    getSingleBookByCategory,
    getSingleBook,
    updateSingleBook,
    deleteABook,
};
