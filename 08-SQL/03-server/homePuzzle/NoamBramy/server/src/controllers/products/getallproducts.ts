import { pool } from "../../server";

export async function getAllProducts(req:any, res:any) {
    try {
      const [products] = await pool.query('SELECT * FROM products');
      res.json(products);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error fetching products' });
    }
  };