
const jwt = require('jwt-simple');
import { NextFunction, Request, Response } from 'express';
import { pool, secret } from '../../server';

const authNext = async (req:Request, res:Response,next:NextFunction) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ message: 'No token, authentication failed' });
        }

        // Decode and verify the token
        const decoded: any = jwt.decode(token, secret);

        // Check if user exists
        const [rows] = await pool.execute('SELECT * FROM users WHERE id = ?', [decoded.id]);
        const users = rows as any[];

        if (users.length === 0) {
            return res.status(401).json({ message: 'Invalid token, authentication failed' });
        }
        
        next(); 
return;
    } catch (error) {
        console.error('Authentication error:', error);
        return res.status(500).json({ message: 'Authentication error' });
    }
};

export default authNext;
