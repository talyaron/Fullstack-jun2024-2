import { Request, Response } from "express";
import { pool, secret } from "../../server";
const jwt = require("jwt-simple");
async function getCheckoutProducts(req: Request, res: Response) {
  try {
    const token = req.cookies.token;

    if (!token) {
      res.status(401).json({ message: "No token, authentication failed" });
      return;
    }

    // Decode and verify the token
    const decoded: any = jwt.decode(token, secret);

    const userId = decoded.user_id;
    const [productsCart] = await pool.execute(
        `SELECT p.*
         FROM order_join_table o
         JOIN products p ON o.product_id = p.product_id
         WHERE o.user_id = ? AND o.products_place = 'cart'`,
        [userId]
      );
      const [productsBought] = await pool.execute(
        `SELECT p.*
         FROM order_join_table o
         JOIN products p ON o.product_id = p.product_id
         WHERE o.user_id = ? AND o.products_place = 'bought'`,
        [userId]
      );
    res.status(200).json({
      success: true,
      productsCart,productsBought
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
export default getCheckoutProducts;
