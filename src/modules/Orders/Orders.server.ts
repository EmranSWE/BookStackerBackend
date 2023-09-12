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
// const getAllOrders = async () => {
//   const result = await prisma.category.findMany();
//   return result;
// };

// // Get Single  User from DB
// const getSingleOrders = async (id: any) => {
//   const result = await prisma.category.findFirst({
//     where: {
//       id: id,
//     },
//   });
//   return result;
// };

// // Get Single  User from DB
// const Orders = async (id: any) => {
//   const result = await prisma.category.findFirst({
//     where: {
//       id: id,
//     },
//   });
//   return result;
// };

export const OrderService = {
  createOrder,
  // getAllOrders,
  // getSingleOrders,
  // Orders,
};
