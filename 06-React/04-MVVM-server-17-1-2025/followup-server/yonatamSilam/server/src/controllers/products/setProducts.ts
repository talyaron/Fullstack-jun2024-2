import { Request, Response } from 'express';
import Product from '../../model/products/productModel';

export const addProduct = async (req: Request, res: Response) => {
    try {
        const { name, price, description, category, inStock } = req.body;
        console.log('hi')
        const newProduct = new Product({
            name,
            price,
            description,
            category,
            inStock,
        });

        const savedProduct = await newProduct.save();

        res.status(201).json({ message: 'Product saved', savedProduct });
    } catch (error) {
        console.log('hello')
        res.status(500).json({ message: 'Error saving product', error });
        
    }
};