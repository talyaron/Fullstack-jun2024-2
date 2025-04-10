import { pool } from "../../server";
import { RequestHandler } from "../../types/requestType";
/*
CREATE TABLE IF NOT EXISTS products (
    products_id INT AUTO_INCREMENT PRIMARY KEY,
    products_name VARCHAR(50) NOT NULL,
    products_description VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
*/
const addProduct: RequestHandler = async (_, res) => {
  try {
    const [rows] = await pool.execute("SELECT * FROM products");
    
    res.status(200).json({
      success: true,
      products: rows, 
    });
  } catch (error) {
    console.error("get products error:", error);
    res.status(500).json({
      success: false,
      message: "get products error",
      error: (error as Error).message,
    });
  }
};
export default addProduct;
