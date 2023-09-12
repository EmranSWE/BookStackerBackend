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
const getSingleBookByCategory = async (id: any, page: Number, size: Number) => {
  const totalBooksInCategory = await prisma.book.count({
    where: {
      categoryId: id,
    },
  });
  const result = await prisma.book.findMany({
    where: {
      categoryId: id,
    },
  });
  return {
    meta: {
      page: page,
      size: size,
      total: totalBooksInCategory,
    },
    data: result,
  };
};

const getSingleBook = async (id: any) => {
  const result = await prisma.book.findFirst({
    where: {
      id: id,
    },
  });
  return result;
};
// Update Single  User from DB
const updateSingleBook = async (id: any, data: any): Promise<Book> => {
  const result = await prisma.book.update({
    where: {
      id: id,
    },
    data: data,
  });
  return result;
};

// Delete Single  User from DB
const deleteABook = async (id: any): Promise<Book> => {
  const result = await prisma.book.delete({
    where: {
      id: id,
    },
  });
  return result;
};
export const BookService = {
  createBook,
  getAllBooks,
  getSingleBookByCategory,
  getSingleBook,
  updateSingleBook,
  deleteABook,
};
