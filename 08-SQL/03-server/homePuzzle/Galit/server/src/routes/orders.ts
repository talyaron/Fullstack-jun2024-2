import express, { Request, Response } from 'express';
import mysql from 'mysql2/promise';
router.post('/add-to-cart', async (req: Request, res: Response) => {
    const { userId, productId } = req.body;

    try {
        const [result] = await pool.execute(
            'INSERT INTO orders (user_id, product_id, status) VALUES (?, ?, ?)',
            [userId, productId, 'cart']
        );

        res.status(201).json({ success: true, message: 'Product added to cart' });
    } catch (error) {
        console.error('Error adding to cart:', error);
        res.status(500).json({ message: 'Error adding to cart', error });
    }
});
