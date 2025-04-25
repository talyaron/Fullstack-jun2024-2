import { pool } from "../../server";

export async function addToCart(req:any, res:any) {
  try {
    const { product_id, user_id } = req.body;

    if (!user_id || !product_id) {
      res.status(400).json({ message: 'Missing data' });
      return;
    }

    await pool.execute(
      'INSERT INTO orders (user_id, product_id, status) VALUES (?, ?, ?)',
      [user_id, product_id, 'cart']
    );

    res.json({ message: 'Product added to cart' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
