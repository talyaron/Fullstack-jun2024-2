import { pool } from "../../server";
import { RequestHandler } from "../../types/requestType";
import bcrypt from 'bcrypt';
const jwt = require('jwt-simple');
import mysql from 'mysql2/promise';

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
            'INSERT INTO users (user_name, user_email, user_password) VALUES (?, ?, ?)',
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
export default registerUser;