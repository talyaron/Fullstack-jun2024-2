const jwt = require("jwt-simple");
import { pool, secret } from "../../server";
import { RequestHandler } from "../../types/requestType";

const checkCookie: RequestHandler = async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      res
        .status(401)
        .json({ success: false, message: "No token, authentication failed" });
      return;
    }
    const decoded = jwt.decode(token, secret);

    const [rows] = await pool.execute("SELECT * FROM users WHERE user_id = ?", [
      decoded.user_id,
    ]);
    const users = rows as any[];

    if (users.length === 0) {
      res.status(401).json({
        success: false,
        message: "Invalid token, authentication failed",
      });
      return;
    }

    res.status(200).json({ success: true, message: "token good!" });
    return;
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(500).json({ success: false, message: "Authentication error" });
    return;
  }
};
export default checkCookie;
