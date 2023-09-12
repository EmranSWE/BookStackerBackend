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
exports.CategoryController = void 0;
const category_service_1 = require("./category.service");
// Creating a category
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield category_service_1.CategoryService.createCategory(req.body);
        res.send({
            status: "true",
            statusCode: 200,
            message: "Category created Successfully!",
            data: data,
        });
    }
    catch (error) {
        res.send(error);
    }
});
//Get all category
const getAllCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield category_service_1.CategoryService.getAllCategory();
        res.send({
            status: "true",
            statusCode: 200,
            message: "Category retrieved successfully!",
            data: data,
        });
    }
    catch (error) {
        res.send(error);
    }
});
const getSingleCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield category_service_1.CategoryService.getSingleCategory(req.params.id);
        res.send({
            status: "true",
            statusCode: 200,
            message: "Category fetched successfully",
            data: data,
        });
    }
    catch (error) {
        res.send(error);
    }
});
const updateSingleCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield category_service_1.CategoryService.updateSingleUser(req.params.id, req.body);
        res.send({
            status: "true",
            statusCode: 200,
            message: "Category updated successfully",
            data: data,
        });
    }
    catch (error) {
        res.send(error);
    }
});
const deleteCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield category_service_1.CategoryService.deleteCategories(req.params.id);
        res.send({
            status: "true",
            statusCode: 200,
            message: "Category deleted successfully!",
            data: data,
        });
    }
    catch (error) {
        res.send(error);
    }
});
exports.CategoryController = {
    createCategory,
    getAllCategory,
    getSingleCategory,
    updateSingleCategory,
    deleteCategories,
};
