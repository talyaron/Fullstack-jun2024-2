// server.ts - Complete Express MySQL User Registration Example
import express, { Request, Response, NextFunction } from 'express';
import mysql from 'mysql2/promise';
// Fix for bcrypt type error
import * as bcrypt from 'bcrypt';
import bodyParser from 'body-parser';

// Define interfaces
interface User {
    id?: number;
    username: string;
    email: string;
    password: string;
    created_at?: Date;
}

interface UserResponse {
    id: number;
    username: string;
    email: string;
    created_at: Date;
}

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create MySQL connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'user_management',
    waitForConnections: true,  // Wait for connections when pool is full
    connectionLimit: 10,       // Maximum connections in the pool
    queueLimit: 0              // Unlimited queue size when all connections are used
});

// Test database connection
async function testDatabaseConnection() {
    try {
        const connection = await pool.getConnection();
        console.log('Database connection established successfully');
        connection.release();

        // Create users table if it doesn't exist
        await pool.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
        console.log('Users table checked/created successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);  // Exit application on database connection failure
    }
}

// User model functions
const UserModel = {
    // Create a new user
    async create(userData: User): Promise<UserResponse> {
        // Hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(userData.password, saltRounds);

        // Insert user into database
        const query = `
      INSERT INTO users (username, email, password, created_at) 
      VALUES (?, ?, ?, NOW())
    `;

        const [result] = await pool.execute(query, [
            userData.username,
            userData.email,
            hashedPassword
        ]);

        // MySQL result with insertId
        const mysqlResult = result as mysql.ResultSetHeader;

        return {
            id: mysqlResult.insertId,
            username: userData.username,
            email: userData.email,
            created_at: new Date()
        };
    },

    // Find user by email
    async findByEmail(email: string): Promise<User | undefined> {
        const [rows] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
        const userRows = rows as User[];
        return userRows.length > 0 ? userRows[0] : undefined;
    },

    // Find user by ID
    async findById(id: number): Promise<UserResponse | undefined> {
        const [rows] = await pool.execute(
            'SELECT id, username, email, created_at FROM users WHERE id = ?',
            [id]
        );
        const userRows = rows as UserResponse[];
        return userRows.length > 0 ? userRows[0] : undefined;
    },

    // Get all users (with pagination)
    async getAll(page: number = 1, limit: number = 10): Promise<UserResponse[]> {
        const offset = (page - 1) * limit;
        const [rows] = await pool.execute(
            'SELECT id, username, email, created_at FROM users LIMIT ? OFFSET ?',
            [limit, offset]
        );
        return rows as UserResponse[];
    }
};

// Define route handler functions separately
// Register a new user handler
const registerUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, email, password } = req.body;

        // Basic validation
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }

        // Password strength validation
        if (password.length < 8) {
            return res.status(400).json({ message: 'Password must be at least 8 characters long' });
        }

        // Check if user already exists
        const existingUser = await UserModel.findByEmail(email);
        if (existingUser) {
            return res.status(409).json({ message: 'User with this email already exists' });
        }

        // Create new user
        const userData: User = { username, email, password };
        const newUser = await UserModel.create(userData);

        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            user: newUser
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

// Login user handler
const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;

        // Basic validation
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // Find user by email
        const user = await UserModel.findByEmail(email);
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // In a real application, you would generate and return a JWT token here
        // For simplicity, we're just returning a success message
        res.status(200).json({
            success: true,
            message: 'Login successful',
            user: {
                id: user.id,
                username: user.username,
                email: user.email
            }
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

// Get user profile handler
const getUserProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = parseInt(req.params.id, 10);

        if (isNaN(userId)) {
            return res.status(400).json({ message: 'Invalid user ID' });
        }

        const user = await UserModel.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error retrieving user profile',
            error: (error as Error).message
        });
    }
};

// Get all users handler
const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const page = parseInt(req.query.page as string || '1', 10);
        const limit = parseInt(req.query.limit as string || '10', 10);

        if (isNaN(page) || isNaN(limit) || page < 1 || limit < 1) {
            return res.status(400).json({ message: 'Invalid pagination parameters' });
        }

        const users = await UserModel.getAll(page, limit);

        res.status(200).json({
            success: true,
            users,
            pagination: {
                page,
                limit
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error retrieving users',
            error: (error as Error).message
        });
    }
};

// API Routes - Using the defined handler functions
app.post('/api/users/register', registerUser);
app.post('/api/users/login', loginUser);
app.get('/api/users/:id', getUserProfile);
app.get('/api/users', getAllUsers);

// Start server
async function startServer() {
    // First test database connection
    await testDatabaseConnection();

    // Then start the server
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        console.log(`API endpoints available:`);
        console.log(`- POST /api/users/register - Register a new user`);
        console.log(`- POST /api/users/login - Login user`);
        console.log(`- GET /api/users/:id - Get user profile`);
        console.log(`- GET /api/users - Get all users (with pagination)`);
    });
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (error) => {
    console.error('Unhandled promise rejection:', error);
});

// Start the application
startServer().catch(error => {
    console.error('Failed to start server:', error);
    process.exit(1);
});

// For TypeScript compilation:
/*
  To run this file:
  1. Install required packages:
     npm install express mysql2 bcrypt body-parser
     npm install -D typescript @types/express @types/node @types/bcrypt
  
  2. Run with ts-node:
     npx ts-node server.ts
     
  3. Or compile to JavaScript:
     npx tsc server.ts
     node server.js
*/