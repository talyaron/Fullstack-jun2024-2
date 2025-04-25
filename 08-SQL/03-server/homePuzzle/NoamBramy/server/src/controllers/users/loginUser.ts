import { pool, secret } from "../../server";
import bcrypt from 'bcrypt';
import jwt from 'jwt-simple';

export async function loginUser(req:any, res:any) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ message: 'Email and password are required' });
            return;
        }

        const [rows] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
        const users = rows as any[];

        console.log(users);

        if (users.length === 0) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }

        const user = users[0];

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }

        const token = jwt.encode({ id: user.user_id }, secret);

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