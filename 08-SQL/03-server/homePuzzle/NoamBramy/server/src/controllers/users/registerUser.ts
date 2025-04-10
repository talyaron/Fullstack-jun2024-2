import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
import { pool } from '../../server';

export async function registerUser(req:any, res:any) {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            res.status(400).json({ message: 'All fields are required' });
            return;
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const [result] = await pool.execute(
            'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
            [username, email, hashedPassword]
        );
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