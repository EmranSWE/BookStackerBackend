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

// // Login a user
// const loginUser = async (req: Request, res: Response) => {
//   try {
//     const data = await UserService.loginUser(req.body);
//     res.send({
//       status: "true",
//       statusCode: 200,
//       message: "User login Successfully!",
//       data: data,
//     });
//   } catch (error) {
//     res.send(error);
//   }
// };

// //Get all user
// const getAllUsers = async (req: Request, res: Response) => {
//   try {
//     const data = await UserService.getAllUser();
//     res.send({
//       status: "true",
//       statusCode: 200,
//       message: "Users retrieved successfully!",
//       data: data,
//     });
//   } catch (error) {
//     res.send(error);
//   }
// };

// const getSingleUsers = async (req: Request, res: Response) => {
//   console.log(req.params.id);
//   try {
//     const data = await UserService.getSingleUser(req.params.id);
//     res.send({
//       status: "true",
//       statusCode: 200,
//       message: "Users gets successfully!",
//       data: data,
//     });
//   } catch (error) {
//     res.send(error);
//   }
// };

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
export const CategoryController = {
  createCategory,
  //   loginUser,
  //   getAllUsers,
  //   getSingleUsers,
  //   updateSingleUser,
  //   deleteSingleUser,
};
