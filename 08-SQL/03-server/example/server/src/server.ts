// src/server.ts - Express MySQL User Registration

import express, { Request, Response } from 'express';
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
const jwt = require('jwt-simple');
const secret = 'xxx';
import cors from 'cors';



// Create the Express application
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175', 'http://localhost:5176'], // Array of allowed origins
    credentials: true,
}));

// Configure middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create MySQL connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'ecommerce',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// IMPORTANT: Define handler types correctly to match Express expectations
type RequestHandler = (req: Request, res: Response) => Promise<void> | void;

// Define route handlers with the correct type
const registerUser: RequestHandler = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        console.log(username, email, password);
        // Basic validation
        if (!username || !email || !password) {
            res.status(400).json({ message: 'All fields are required' });
            return;
        }

        // Hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Insert user into database
        const [result] = await pool.execute(
            'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
            [username, email, hashedPassword]
        );

        console.log("results", result);

        const insertResult = result as mysql.ResultSetHeader;

        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            userId: insertResult.insertId
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({
            success: false,
            message: 'Error registering user',
            error: (error as Error).message
        });
    }
};

const loginUser: RequestHandler = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Basic validation
        if (!email || !password) {
            res.status(400).json({ message: 'Email and password are required' });
            return;
        }

        // Find user by email
        const [rows] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
        const users = rows as any[];

        console.log(users);

        if (users.length === 0) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }

        const user = users[0];

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }

        //create cookie
        const token = jwt.encode({ id: user.id }, secret, 'HS256', 'none');

        res.cookie('token', token, { httpOnly: true, secure: false });

        res.status(200).json({
            success: true,
            message: 'Login successful',
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            success: false,
            message: 'Error during login',
            error: (error as Error).message
        });
    }
};

// Register routes
app.post('/api/users/register', registerUser);
app.post('/api/users/login', loginUser);

// Create the users table if it doesn't exist
const initializeDatabase = async () => {
    try {
        await pool.execute(`
        CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
        console.log('Database initialized successfully');
    } catch (error) {
        console.error('Database initialization failed:', error);
        process.exit(1);
    }
};

// Start the server
const startServer = async () => {
    try {
        await initializeDatabase();

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