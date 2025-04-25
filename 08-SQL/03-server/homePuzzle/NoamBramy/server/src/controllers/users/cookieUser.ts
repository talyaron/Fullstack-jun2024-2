import { pool, secret } from "../../server";
import jwt from 'jwt-simple';

export async function cookieUser(req: any, res: any) {
  try {
    const token = req.cookies.token;
    console.log("Token received:", token);
    if (!token) {
      res
        .status(401)
        .json({ success: false, message: "No token, authentication failed" });
      return;
    }

    const decoded = jwt.decode(token, secret);
    console.log("Decoded:", JSON.stringify(decoded, null, 2));

    if (!decoded || !decoded.id) {
      res.status(401).json({
        success: false,
        message: "Invalid token structure, authentication failed",
      });
      return;
    }

    const [rows] = await pool.execute("SELECT * FROM users WHERE user_id = ?", [
      decoded.id,
    ]);
    const users = rows as any[];

    if (users.length === 0) {
      res.status(401).json({
        success: false,
        message: "Invalid token, authentication failed",
      });
      return;
    }

    // Return the userId in the response
    res.status(200).json({ success: true, message: "token good!", userId: decoded.id });
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(500).json({ success: false, message: "Authentication error" });
  }
}
