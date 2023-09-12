import { Book, Category, PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient();

const createCategory = async (data: Category): Promise<Category> => {
  const result = await prisma.category.create({
    data: data,
  });
  return result;
};

// Get all Users from DB
const getAllCategory = async () => {
  const result = await prisma.category.findMany();
  return result;
};

// Get Single  User from DB
const getSingleCategory = async (id: any) => {
  const result = await prisma.category.findFirst({
    where: {
      id: id,
    },
    include: {
      books: true,
    },
  });
  return result;
};

// Update Single  User from DB
const updateSingleUser = async (id: any, data: any): Promise<Category> => {
  console.log("update", id, data);
  const result = await prisma.category.update({
    where: {
      id: id,
    },
    data: data,
  });
  return result;
};

// Delete Single  User from DB
const deleteCategories = async (id: any): Promise<Category> => {
  const result = await prisma.category.delete({
    where: {
      id: id,
    },
  });
  return result;
};
export const CategoryService = {
  createCategory,
  getAllCategory,
  getSingleCategory,
  updateSingleUser,
  deleteCategories,
};
