import { PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient();

//Insert a new user to DB
const createUser = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data,
  });
  return result;
};

// Get all Users from DB
const getAllUser = async () => {
  const result = await prisma.user.findMany();
  return result;
};
export const UserService = {
  createUser,
  getAllUser,
};
