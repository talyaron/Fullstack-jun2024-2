const jwt = require("jwt-simple");
import { NextFunction, Request, Response } from "express";
import { pool, secret } from "../../server";

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      res.status(401).json({ message: "No token, authentication failed" });
      return;
    }

    // Decode and verify the token
    const decoded: any = jwt.decode(token, secret);

    // Check if user exists
    const [rows] = await pool.execute("SELECT * FROM users WHERE user_id = ?", [
      decoded.user_id,
    ]);
    const users = rows as any[];

    if (users.length === 0) {
      res.status(401).json({ message: "Invalid token, authentication failed" });
      return;
    }

    next();
    return;
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(500).json({ message: "Authentication error" });
    return;
  }
};

export default authMiddleware;
