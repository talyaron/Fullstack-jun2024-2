import { Request, Response } from "express";
import { pool, secret } from "../../server";
const jwt = require("jwt-simple");

async function buyProducts(req: Request, res: Response) {
  try {
    const token = req.cookies.token;

    if (!token) {
      res.status(401).json({ message: "No token, authentication failed" });
      return;
    }

    // Decode and verify the token
    const decoded: any = jwt.decode(token, secret);

    const userId = decoded.user_id;
    const [productsBought] =await pool.execute(
        `UPDATE order_join_table
         SET products_place = 'bought'
         WHERE user_id = ? AND products_place = 'cart'`,
        [userId]
      );

    res.status(200).json({
      success: true,
      productsBought
    });
  } catch (error) {
    console.error("get products error:", error);
    res.status(500).json({
      success: false,
      message: "get products error",
      error: (error as Error).message,
    });
  }
}
export default buyProducts;
