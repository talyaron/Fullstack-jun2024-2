import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import todoRoutes from "./src/routes/TodoRoute";

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api", todoRoutes);

// Database connection and server start
mongoose
    .connect("mongodb://127.0.0.1:27017/todoDB")
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
    })
    .catch((error) => console.error("Error connecting to MongoDB:", error));
