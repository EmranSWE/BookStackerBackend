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
  //   console.log("Get All books", req.query.page);
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
    const data = await BookService.getSingleBookByCategory(req.params.id);
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

// const updateSingleUser = async (req: Request, res: Response) => {
//   console.log(req.params.id);
//   try {
//     const data = await UserService.updateSingleUser(req.params.id, req.body);
//     res.send({
//       status: "true",
//       statusCode: 200,
//       message: "Users update successfully!",
//       data: data,
//     });
//   } catch (error) {
//     res.send(error);
//   }
// };

// const deleteSingleUser = async (req: Request, res: Response) => {
//   try {
//     const data = await UserService.deleteSingleUser(req.params.id);
//     res.send({
//       status: "true",
//       statusCode: 200,
//       message: "Users deleted successfully!",
//       data: data,
//     });
//   } catch (error) {
//     res.send(error);
//   }
// };
export const BookController = {
  createBook,
  getAllBooks,
  getSingleBookByCategory,
};
