import { Book, Prisma, PrismaClient, User } from "@prisma/client";
import { FilterOptions } from "./books.interface";
const prisma = new PrismaClient();

const createBook = async (data: Book): Promise<Book> => {
  const result = await prisma.book.create({
    data: data,
    include: {
      category: true,
    },
  });
  return result;
};

const getAllBooks = async (options: FilterOptions) => {
  const page = options.page || 1;
  console.log(options);
  const size = 10;
  const sortBy = options.sortBy || "title";
  const sortOrder = options.sortOrder || "asc";

  const skip = (page - 1) * size;
  let where: any = {};

  if (options.minPrice !== undefined) {
    where.price = {
      ...where.price,
      gte: options.minPrice,
    };
  }

  const totalBooks = await prisma.book.count();
  const totalPages = Math.ceil(totalBooks / size);
  const books = await prisma.book.findMany({
    where: where,
    skip: skip,
    take: size,
    orderBy: {
      [sortBy]: sortOrder,
    },
  });

  return {
    page: page,
    size: size,
    total: totalBooks,
    totalPages: totalPages,
    data: books,
  };
};

// Get Single  User from DB
const getSingleBookByCategory = async (id: any) => {
  console.log(id);
  const result = await prisma.book.findMany({
    where: {
      id: id,
    },
  });
  return result;
};

// // Update Single  User from DB
// const updateSingleUser = async (id: any, data: any): Promise<User> => {
//   console.log("update", id, data);
//   const result = await prisma.user.update({
//     where: {
//       id: id,
//     },
//     data: data,
//   });
//   return result;
// };

// // Delete Single  User from DB
// const deleteSingleUser = async (id: any): Promise<User> => {
//   const result = await prisma.user.delete({
//     where: {
//       id: id,
//     },
//   });
//   return result;
// };
export const BookService = {
  createBook,
  getAllBooks,
  getSingleBookByCategory,
};
