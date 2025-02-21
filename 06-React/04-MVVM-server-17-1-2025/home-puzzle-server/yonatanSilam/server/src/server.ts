import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes";
import cookieParser from "cookie-parser";
import "dotenv/config";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes";

const app = express();
const port = 3000;

app.use(cookieParser());
app.use(express.json());
app.use(express.static("public/welcome"));
app.use(express.static("public"));
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
    credentials: true,              // Allow cookies to be sent
  })
);

const dbUrl = process.env.DB_URL;
const database = process.env.DATABASE;

//connection

mongoose
  .connect(`${dbUrl}/${database}`)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

app.listen(port, () => {
  console.log(`toDo app listening on localhost:${port}`);
});
