import express from "express";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
export const secret = "xxx";
dotenv.config();
import cors from "cors";
import path from "path";
import fs from "fs/promises";
const cookieParser = require("cookie-parser");

// Create the Express application
const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());

// Configure middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PASSWORD = process.env.PASSWORD;

// Create MySQL connection pool
export const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: PASSWORD,
  database: "fitness",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const runSQLFile = async (filePath: string) => {
    const fullPath = path.resolve(filePath);
    const sql = await fs.readFile(fullPath, "utf8");
    try {
      await pool.query(sql);
      console.log("SQL file executed successfully");
    } catch (err) {
      console.error("Error executing SQL file:", err);
    }
  };


// Start th server
const startServer = async () => {
  try {
    await runSQLFile("./sql/init.sql");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error);
    process.exit(1);
  }
  
};

startServer();
