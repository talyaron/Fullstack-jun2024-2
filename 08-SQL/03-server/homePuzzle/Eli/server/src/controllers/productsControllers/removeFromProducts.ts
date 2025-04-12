import { pool, secret } from "../../server";
import { RequestHandler } from "../../types/requestType";
import mysql from "mysql2/promise";
const jwt = require("jwt-simple");

const removeProduct: RequestHandler = async (req, res) => {
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
        `DELETE FROM order_join_table 
         WHERE product_id = ? AND user_id = ? AND products_place = 'cart'`,
        [productId, userId]
      );

    console.log("results", result);

    const insertResult = result as mysql.ResultSetHeader;
    res.status(201).json({
      success: true,
      message: "product removed successfully",
      productId,
      userId: insertResult.insertId,
    });
  } catch (error) {
    console.error("product removing error:", error);
    res.status(500).json({
      success: false,
      message: "product removing error",
      error: (error as Error).message,
    });
  }
};
export default removeProduct;
