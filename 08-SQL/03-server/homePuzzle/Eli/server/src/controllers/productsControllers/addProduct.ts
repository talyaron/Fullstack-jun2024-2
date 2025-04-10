
import { pool } from "../../server";
import { RequestHandler } from "../../types/requestType";
import mysql from 'mysql2/promise';

const addProduct: RequestHandler = async (req, res) => {
    try {
        const { name, description,price,imgUrl } = req.body;
        console.log(name, description,price,imgUrl);
        if (!name || !description || !price||!imgUrl) {
            res.status(400).json({ message: 'All fields are required' });
            return;
        }
        const [result] = await pool.execute(
            'INSERT INTO products (product_name, product_description, product_price,product_imgUrl) VALUES (?, ?, ?,?)',
            [name, description, price,imgUrl]
          );

        console.log("results", result);

        const insertResult = result as mysql.ResultSetHeader;

        res.status(201).json({
            success: true,
            message: 'product added successfully',
            userId: insertResult.insertId
        });
    } catch (error) {
        console.error('product adding error:', error);
        res.status(500).json({
            success: false,
            message: 'product adding error',
            error: (error as Error).message
        });
    }
};
export default addProduct;