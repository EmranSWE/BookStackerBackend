import { Book, PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient();

const createCategory = async (data: Book): Promise<Book> => {
  console.log("Service at Category:", data);
  const result = await prisma.book.create({
    data: data,
  });

  return result;
};

// Get all Users from DB
const getAllUser = async () => {
  const result = await prisma.user.findMany();
  return result;
};

// Get Single  User from DB
const getSingleUser = async (id: any) => {
  const result = await prisma.user.findFirst({
    where: {
      id: id,
    },
  });
  return result;
};

// Update Single  User from DB
const updateSingleUser = async (id: any, data: any): Promise<User> => {
  console.log("update", id, data);
  const result = await prisma.user.update({
    where: {
      id: id,
    },
    data: data,
  });
  return result;
};

// Delete Single  User from DB
const deleteSingleUser = async (id: any): Promise<User> => {
  const result = await prisma.user.delete({
    where: {
      id: id,
    },
  });
  return result;
};
export const CategoryService = {
  createCategory,
  getAllUser,
  getSingleUser,
  updateSingleUser,
  deleteSingleUser,
};
