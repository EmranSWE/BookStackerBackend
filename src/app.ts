import cors from "cors";
import express from "express";

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res) => {
  res.send("Hello Your Book stacker backend Server is running! YAY!🧑‍💻🧑‍💻");
});

export default app;
