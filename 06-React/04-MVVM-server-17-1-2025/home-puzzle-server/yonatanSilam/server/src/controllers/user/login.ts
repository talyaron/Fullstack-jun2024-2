import { UserModel } from "../../models/userModel";
import jwt from "jwt-simple";
import "dotenv/config";
import bcrypt from "bcrypt";

const secret = process.env.JWT_SECRET;

export async function login(req: any, res: any) {
  try {
    const { username, password } = req.body;
    if (!username || !password) throw new Error("Please fill all fields");
    // Find user by userName
    const user = await UserModel.findOne({ username });
    if (!user) {
      return res.status(400).send({ error: "Invalid userName or password" });
    }
    if (!user.password) throw new Error("Invalid userName or password");

    //compare password
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).send({ error: "Invalid userName or password" });
    }
    if (!secret) {
      throw new Error("JWT_SECRET is not defined in the environment variables");
    }
    //encode user id and role in token
    const token = jwt.encode({ id: user._id, role: "user" }, secret);
console.log(token)
    //send cookie to client
    res.cookie("user", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });
    return res.status(200).send({ message: "Login successful" });
  } catch (error: any) {

    console.error(error);
    return res.status(500).send({ error: error.message });
  }
}
