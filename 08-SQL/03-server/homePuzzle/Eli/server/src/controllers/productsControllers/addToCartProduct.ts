import { Request, Response } from "express";
import { pool, secret } from "../../server";
import mysql from "mysql2/promise";
const jwt = require("jwt-simple");

async function addToCartProduct(req: Request, res: Response) {
  try {
    const { productId } = req.body;
    const token = req.cookies.token;

    console.log(productId);
    if (!productId) {
      res.status(400).json({ message: "product id is required" });
      return;
    }

    if (!token) {
      res.status(401).json({ message: "No token, authentication failed" });
      return;
    }

    // Decode and verify the token
    const decoded: any = jwt.decode(token, secret);

    const userId = decoded.user_id;
    const [result] = await pool.execute(
      `INSERT INTO order_join_table (product_id, user_id) VALUES (?, ?)`,
      [productId, userId]
    );

    console.log("results", result);

    const insertResult = result as mysql.ResultSetHeader;

    res.status(201).json({
      success: true,
      message: "product added successfully",
      userId: insertResult.insertId,
    });
  } catch (error) {
    console.error("product adding error:", error);
    res.status(500).json({
      success: false,
      message: "product adding error",
      error: (error as Error).message,
    });
  }
}
export default addToCartProduct;
