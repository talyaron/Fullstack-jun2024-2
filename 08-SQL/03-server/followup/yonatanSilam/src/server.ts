// src/server.ts - Express MySQL User Registration

import express, { Request, Response } from 'express';
import mysql from 'mysql2/promise'; //??
import bcrypt from 'bcrypt';
const jwt = require('jwt-simple');
const secret = 'xxx';

// Create the Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Configure middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  //??

// Create MySQL connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'silam',
    database: 'ecommerce',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// IMPORTANT: Define handler types correctly to match Express expectations
type RequestHandler = (req: Request, res: Response) => Promise<void> | void;//??

const registerUser: RequestHandler = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            res.status(400).json({ message: 'All fields are required' });
            return;
        }

        // Hash password
        const saltRounds = 10;  
        const hashedPassword = await bcrypt.hash(password, saltRounds);


        //want to chack here if the user is exsist in the db
        const [existingUser] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);  
        const users = existingUser as any[];
        if (users.length > 0) { 
            res.status(409).json({ message: 'User already exists' });
            return;
        }

        // Insert user into database
        const [result] = await pool.execute(
            'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
            [username, email, hashedPassword]
        )
        const insertResult = result as mysql.ResultSetHeader; //???

        console.log("results", result);

        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            userId: insertResult.insertId //??
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({
            success: false,
            message: 'Error registering user',
            error: (error as Error).message
        });
    }
}
const loginUser: RequestHandler = async (req, res) => {
    try{
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ message: 'Email and password are required' });
            return;
        }

        // Find user by email
        const [rows] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
        const users = rows as any[];

        if (users.length === 0) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }

        const user = users[0];

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }

        // Generate JWT token
        const payload = { id: user.id, email: user.email };
        const token = jwt.encode(payload, secret);

        res.status(200).json({
            success: true,
            message: 'Login successful',
            token: token
        });
}catch (error) {
        console.error('Login error:', error);   
        res.status(500).json({
            success: false,
            message: 'Error logging in',
            error: (error as Error).message
        });
    }
}
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
        password VARCHAR(255) NOT NULL
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