import { Request, Response } from "express";
import { CategoryService } from "./category.service";

// Creating a category
const createCategory = async (req: Request, res: Response) => {
  try {
    const data = await CategoryService.createCategory(req.body);
    res.send({
      status: "true",
      statusCode: 200,
      message: "Category created Successfully!",
      data: data,
    });
  } catch (error) {
    res.send(error);
  }
};

//Get all category
const getAllCategory = async (req: Request, res: Response) => {
  try {
    const data = await CategoryService.getAllCategory();
    res.send({
      status: "true",
      statusCode: 200,
      message: "Category retrieved successfully!",
      data: data,
    });
  } catch (error) {
    res.send(error);
  }
};

const getSingleCategory = async (req: Request, res: Response) => {
  try {
    const data = await CategoryService.getSingleCategory(req.params.id);
    res.send({
      status: "true",
      statusCode: 200,
      message: "Category fetched successfully",
      data: data,
    });
  } catch (error) {
    res.send(error);
  }
};

const updateSingleCategory = async (req: Request, res: Response) => {
  try {
    const data = await CategoryService.updateSingleUser(
      req.params.id,
      req.body
    );
    res.send({
      status: "true",
      statusCode: 200,
      message: "Category updated successfully",
      data: data,
    });
  } catch (error) {
    res.send(error);
  }
};

const deleteCategories = async (req: Request, res: Response) => {
  try {
    const data = await CategoryService.deleteCategories(req.params.id);
    res.send({
      status: "true",
      statusCode: 200,
      message: "Category deleted successfully!",
      data: data,
    });
  } catch (error) {
    res.send(error);
  }
};
export const CategoryController = {
  createCategory,
  getAllCategory,
  getSingleCategory,
  updateSingleCategory,
  deleteCategories,
};
