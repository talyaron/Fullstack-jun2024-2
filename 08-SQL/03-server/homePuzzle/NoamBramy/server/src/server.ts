// src/server.ts - Express MySQL User Registration

import express, { Request, Response } from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';
import { cookieUser } from './controllers/users/cookieUser';
import { getAllProducts } from './controllers/products/getallproducts';
import { addToCart } from './controllers/cart/addToCart';
import { addProduct } from './controllers/products/addProduct';
import { registerUser } from './controllers/users/registerUser';
import { loginUser } from './controllers/users/loginUser';
import cookieParser from 'cookie-parser';
import { getCart } from './controllers/cart/getCart';
import { getBoughtItems } from './controllers/orders/boughtItems';
import { buyProduct } from './controllers/cart/buyFromCart';

const app = express();
const PORT = process.env.PORT || 3000;
export const secret = 'xxx';

app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175', 'http://localhost:5176'], // Array of allowed origins
    credentials: true,
}));

// Configure middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Create MySQL connection pool
export const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fullstack',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
app.get('/api/cart/bought/:userId', getBoughtItems);
app.get('/api/users/cookieUser', cookieUser)
app.get('/api/products', getAllProducts);
app.post('/api/cart/add', addToCart);
app.post('/api/cart/buy/:userId', buyProduct);
app.get('/api/cart/:user_id', getCart);
app.post('/api/products/addproduct', addProduct);
app.post('/api/users/register', registerUser);
app.post('/api/users/login', loginUser);


const startServer = async () => {
    try {

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
            console.log('Available routes:');
            console.log('POST /api/users/register - Register a new user');
            console.log('POST /api/users/login - Login a user');
        });
    } catch (error) {
        console.error('Server startup failed:', error);
        process.exit(1);
    }
};

startServer();