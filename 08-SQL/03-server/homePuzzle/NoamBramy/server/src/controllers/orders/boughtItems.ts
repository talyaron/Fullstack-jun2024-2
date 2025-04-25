import { pool } from "../../server";

export async function getBoughtItems(req: any, res: any) {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ message: 'Missing userId' });
    }

    const [boughtItems] = await pool.query(
      `SELECT p.id, p.name, p.image, p.price
      FROM orders o
      JOIN products p ON o.product_id = p.id
      WHERE o.user_id = ? AND o.status = "bought"`,
      [userId]
    );

    res.status(200).json(boughtItems);
  } catch (err) {
    console.error('Error fetching bought items:', err);
    res.status(500).json({ message: 'Server error fetching bought items' });
  }
}
