import cors from "cors";
import express, { Application } from "express";
import { UserRoutes } from "./modules/User/user.route";
import { BookRoutes } from "./modules/Books/books.route";
import { CategoryRoutes } from "./modules/category/category.route";
import { OrdersRoutes } from "./modules/Orders/Order.route";

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", UserRoutes);
app.use("/api/v1", CategoryRoutes);
app.use("/api/v1", BookRoutes);
app.use("/api/v1", OrdersRoutes);
export default app;
