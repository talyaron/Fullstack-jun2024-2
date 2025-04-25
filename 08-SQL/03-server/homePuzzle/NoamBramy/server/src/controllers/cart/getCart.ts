import { pool } from "../../server";

export async function getCart(req: any, res: any) {
  try {
    const { user_id } = req.params;

    if (!user_id) {
      res.status(400).json({ message: 'Missing user_id' });
      return;
    }
    const [cartItems] = await pool.query(
      'SELECT p.id, p.name, p.price, p.image FROM orders o JOIN products p ON o.product_id = p.id WHERE o.user_id = ? AND o.status = "cart"',
      [user_id]
    );

    res.status(200).json(cartItems);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error fetching cart' });
  }
}
