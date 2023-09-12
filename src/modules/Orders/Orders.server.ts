import { Order, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

type OrderedBookItem = {
  bookId: string;
  quantity: number;
};

type OrderData = {
  userId: string;
  orderedBooks: OrderedBookItem[];
  status?: "pending" | "shipped" | "delivered";
};

const createOrder = async (data: OrderData) => {
  try {
    console.log("Creating order with data:", data);

    const result = await prisma.order.create({
      data: {
        ...data,
      },
    });

    console.log("Order successfully created:", result);
    return result;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

// Get all Users from DB
const getAllOrders = async () => {
  const result = await prisma.order.findMany();
  return result;
};

// Get Single Orders from DB
const getSingleOrders = async (id: any) => {
  console.log("single user id", id);
  const result = await prisma.order.findMany({
    where: {
      id: id,
    },
  });
  return result;
};

// Get Single  Orders from DB
const Orders = async (id: any) => {
  console.log("order service", id);

  const result = await prisma.order.findMany({
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
