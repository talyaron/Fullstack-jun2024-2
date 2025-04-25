// src/server.ts - Express MySQL User Registration

import express from "express";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
export const secret = "xxx";
dotenv.config();
import cors from "cors";
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
  database: "eli_ecommerce",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Define route handlers with the correct type

// routes
import userRoutes from "./router/userRoutes";
app.use("/api/users", userRoutes);
import authRoutes from "./router/authRoutes";
app.use("/api/auth", authRoutes);
import productRoutes from "./router/productRoutes";
app.use("/api/products", productRoutes);
// Create the users table if it doesn't exist
const initializeDatabase = async () => {
  try {
    await pool.execute(`
        CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("Database initialized successfully");
  } catch (error) {
    console.error("Database initialization failed:", error);
    process.exit(1);
  }
};
const addData = async () => {
  try {
    await pool.execute(`
        CREATE TABLE IF NOT EXISTS products (
        product_id INT AUTO_INCREMENT PRIMARY KEY,
        product_name VARCHAR(50) NOT NULL UNIQUE,
        product_description VARCHAR(100) NOT NULL ,
        product_price DECIMAL(10, 2) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("Database initialized successfully");
  } catch (error) {
    console.error("Database initialization failed:", error);
    process.exit(1);
  }
};
const addDataJoinTable = async () => {
  try {
    await pool.execute(`
        CREATE TABLE IF NOT EXISTS order_join_table (
        order_id INT AUTO_INCREMENT PRIMARY KEY unique,
        product_id int NOT NULL ,
        user_id int NOT NULL ,
        products_place ENUM("cart","bought") not null DEFAULT 'cart',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (product_id) REFERENCES products(product_id),
        FOREIGN KEY (user_id) REFERENCES users(user_id)
      )
    `);
    console.log("Database initialized successfully");
  } catch (error) {
    console.error("Database initialization failed:", error);
    process.exit(1);
  }
};
// Start th server
const startServer = async () => {
  try {
    await initializeDatabase();
    await addDataJoinTable();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error);
    process.exit(1);
  }
};

startServer();
