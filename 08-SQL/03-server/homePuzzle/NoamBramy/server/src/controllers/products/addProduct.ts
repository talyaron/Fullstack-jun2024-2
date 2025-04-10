import { pool } from "../../server";

export async function addProduct(req:any, res:any) {
    try {
        const { name, price, image } = req.body;

        if (!name || !price) {
            res.status(400).json({ message: 'Name and price are required' });
            return;
        }

        await pool.execute(
            'INSERT INTO products (name, price, image) VALUES (?, ?, ?)',
            [name, price, image]
        );

        res.status(201).json({ message: 'Product added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
