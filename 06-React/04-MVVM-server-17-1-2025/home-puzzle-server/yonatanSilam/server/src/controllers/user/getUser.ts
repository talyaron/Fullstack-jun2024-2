import { UserModel } from "../../models/userModel";
import jwt from "jwt-simple";
import "dotenv/config";

// This function retrieves the authenticated user's details from the database using the JWT token in the cookies.

const secret = process.env.JWT_SECRET as string;
export async function getUserDetails(req: any, res: any) {
  try {
    const { user: token } = req.cookies;
    if (!token) {
      return res.status(401).send({ error: "User not authenticated" });
    }

    const decoded = jwt.decode(token, secret);
    const user = await UserModel.findById(decoded.id); 
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    // get player data to and render it to screen in the shield

    return res.status(200).send({ user });
  } catch (error: any) {
    console.error(error);
    return res.status(500).send({ error: error.message });
  }
}

