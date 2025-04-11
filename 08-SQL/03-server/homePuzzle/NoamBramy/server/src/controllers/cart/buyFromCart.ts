import { pool } from "../../server";
import { ResultSetHeader } from "mysql2";

export async function buyProduct(req: any, res: any) {
  try {
    const { product_id } = req.body;
    const { userId } = req.params;
    if (!userId || !product_id) {
      return res.status(400).json({ message: 'Missing user_id or product_id' });
    }

    const [rows]: [ResultSetHeader, any[]] = await pool.query(
      `UPDATE orders 
       SET status = 'bought' 
       WHERE user_id = ? AND product_id = ? AND status = 'cart'`,
      [userId, product_id]
    );

    if (rows.affectedRows === 0) {
      return res.status(404).json({ message: 'Product not found in cart' });
    }

    res.status(200).json({ message: 'Product bought successfully' });
  } catch (err) {
    console.error('Error buying product:', err);
    res.status(500).json({ message: 'Server error updating product status' });
  }
}
