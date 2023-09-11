import { PrismaClient, User } from "@prisma/client";
import jwt, { Secret } from "jsonwebtoken";
import bcrypt from "bcrypt";
import { error } from "console";
const prisma = new PrismaClient();
const round = process.env.BCRYPT_SALT_ROUNDS;
//Insert a new user to DB
const createUser = async (data: User): Promise<User> => {
  const hashedPassword = await bcrypt.hash(data.password, Number(round));
  const result = await prisma.user.create({
    data: {
      ...data,
      password: hashedPassword,
    },
  });

  return result;
};

//Login a new user to DB
const loginUser = async (data: User) => {
  const { email, password } = data;
  const isUserExist = await prisma.user.findUnique({
    where: { email: email },
    select: {
      email: true,
      password: true,
      role: true,
    },
  });
  if (!isUserExist) {
    console.log("wronG pass or email");
    return error;
  }

  const isPasswordMatched = await bcrypt.compare(
    password,
    isUserExist?.password
  );

  if (!isPasswordMatched) {
    console.log("wronG pass");
    return error;
  }
  console.log(isUserExist);

  //Create refresh token
  const accessToken = jwt.sign(
    {
      email: isUserExist?.email,
      role: isUserExist.role,
    },
    process.env.JWT_SECRET as Secret,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );

  // Refresh token
  const refreshToken = jwt.sign(
    {
      email: isUserExist?.email,
      role: isUserExist.role,
    },
    process.env.JWT_SECRET as Secret,
    {
      expiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
    }
  );
  return { accessToken, refreshToken };
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
export const UserService = {
  createUser,
  loginUser,
  getAllUser,
  getSingleUser,
  updateSingleUser,
  deleteSingleUser,
};
