import { Request, Response } from "express";
import { UserService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    const data = await UserService.createUser(req.body);
    res.send({
      status: "true",
      statusCode: 200,
      message: " User created Successfully!",
      data: data,
    });
  } catch (error) {
    res.send(error);
  }
};

//Get all user
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const data = await UserService.getAllUser();
    res.send({
      status: "true",
      statusCode: 200,
      message: "Users retrieved successfully!",
      data: data,
    });
  } catch (error) {
    res.send(error);
  }
};
export const UserController = {
  createUser,
  getAllUsers,
};
