import { Request, Response } from "express";
import { UserService } from "./user.service";

// Creating a user
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

// Login a user
const loginUser = async (req: Request, res: Response) => {
  try {
    const data = await UserService.loginUser(req.body);
    res.send({
      status: "true",
      statusCode: 200,
      message: "User login Successfully!",
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

const getSingleUsers = async (req: Request, res: Response) => {
  console.log(req.params.id);
  try {
    const data = await UserService.getSingleUser(req.params.id);
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

const getProfile = async (req: Request, res: Response) => {
  try {
    const data = await UserService.getProfile(req.params.id);
    res.send({
      status: "true",
      statusCode: 200,
      message: "Users profile gets successfully!",
      data: data,
    });
  } catch (error) {
    res.send(error);
  }
};
const updateSingleUser = async (req: Request, res: Response) => {
  console.log(req.params.id);
  try {
    const data = await UserService.updateSingleUser(req.params.id, req.body);
    res.send({
      status: "true",
      statusCode: 200,
      message: "Users update successfully!",
      data: data,
    });
  } catch (error) {
    res.send(error);
  }
};

const deleteSingleUser = async (req: Request, res: Response) => {
  try {
    const data = await UserService.deleteSingleUser(req.params.id);
    res.send({
      status: "true",
      statusCode: 200,
      message: "Users deleted successfully!",
      data: data,
    });
  } catch (error) {
    res.send(error);
  }
};
export const UserController = {
  createUser,
  loginUser,
  getAllUsers,
  getSingleUsers,
  updateSingleUser,
  deleteSingleUser,
  getProfile,
};
