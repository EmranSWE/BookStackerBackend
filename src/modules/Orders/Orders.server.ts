import { Book, Category, Order, PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient();

const createOrder = async (data: Order) => {
  const result = await prisma.order.create({
    data: data,
  });
  return result;
};

// Get all Users from DB
const getAllOrders = async () => {
  const result = await prisma.category.findMany();
  return result;
};

// Get Single  User from DB
const getSingleOrders = async (id: any) => {
  const result = await prisma.category.findFirst({
    where: {
      id: id,
    },
  });
  return result;
};

// Get Single  User from DB
const Orders = async (id: any) => {
  const result = await prisma.category.findFirst({
    where: {
      id: id,
    },
  });
  return result;
};

export const OrderService = {
  createOrder,
  getAllOrders,
  getSingleOrders,
  Orders,
};
