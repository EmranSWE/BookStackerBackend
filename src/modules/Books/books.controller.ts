import { Request, Response } from "express";
import { BookService } from "./books.server";

// Creating a user
const createBook = async (req: Request, res: Response) => {
  try {
    const data = await BookService.createBook(req.body);
    res.send({
      status: "true",
      statusCode: 200,
      message: "Book created Successfully!",
      data: data,
    });
  } catch (error) {
    res.send(error);
  }
};

//Get all user
const getAllBooks = async (req: Request, res: Response) => {
  try {
    const data = await BookService.getAllBooks(req.query);
    res.send({
      status: "true",
      statusCode: 200,
      message: "Books retrieved successfully!",
      data: data,
    });
  } catch (error) {
    res.send(error);
  }
};

const getSingleBookByCategory = async (req: Request, res: Response) => {
  try {
    const page =
      req.query.page && typeof req.query.page === "string"
        ? parseInt(req.query.page)
        : 1;

    const size =
      req.query.size && typeof req.query.size === "string"
        ? parseInt(req.query.size)
        : 10;
    const categoryId = req.params.categoryId;
    const data = await BookService.getSingleBookByCategory(
      categoryId,
      page,
      size
    );
    res.send({
      status: "true",
      statusCode: 200,
      message: "Users gets successfully!",
      data: data,
    });
  } catch (error) {
    res.send(error);
  }
};

const getSingleBook = async (req: Request, res: Response) => {
  try {
    const data = await BookService.getSingleBook(req.params.id);
    res.send({
      status: "true",
      statusCode: 200,
      message: "Books fetched successfully!",
      data: data,
    });
  } catch (error) {
    res.send(error);
  }
};

const updateSingleBook = async (req: Request, res: Response) => {
  console.log(req.params.id);
  try {
    const data = await BookService.updateSingleBook(req.params.id, req.body);
    res.send({
      status: "true",
      statusCode: 200,
      message: "Books update successfully!",
      data: data,
    });
  } catch (error) {
    res.send(error);
  }
};

const deleteABook = async (req: Request, res: Response) => {
  try {
    const data = await BookService.deleteABook(req.params.id);
    res.send({
      status: "true",
      statusCode: 200,
      message: "Books deleted successfully!",
      data: data,
    });
  } catch (error) {
    res.send(error);
  }
};
export const BookController = {
  createBook,
  getAllBooks,
  getSingleBookByCategory,
  getSingleBook,
  updateSingleBook,
  deleteABook,
};
