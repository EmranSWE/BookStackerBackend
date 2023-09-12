import { Request, Response } from "express";
import { OrderService } from "./Orders.server";

// Creating a category
const createOrder = async (req: Request, res: Response) => {
  try {
    console.log("orders", req.body);
    const data = await OrderService.createOrder(req.body);
    res.send({
      status: "true",
      statusCode: 200,
      message: "Order created Successfully!",
      data: data,
    });
  } catch (error) {
    res.send(error);
  }
};

//Get all category
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const data = await OrderService.getAllOrders();
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

const getSingleOrders = async (req: Request, res: Response) => {
  try {
    const data = await OrderService.getSingleOrders(req.params.id);
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

const Orders = async (req: Request, res: Response) => {
  try {
    const data = await OrderService.Orders(req.params.id);
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

export const OrderController = {
  createOrder,
  getAllOrders,
  getSingleOrders,
  Orders,
};
