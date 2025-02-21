import bcrypt from "bcrypt";
import { UserModel } from "../../models/userModel";
const saltRounds: number = Number(process.env.SALT_BCRYPT);

export async function register(req: any, res: any) {
  try {
    const {
      username,
      password
    } = req.body;

    if (
      !username ||
      !password 
    ) {
      throw new Error("Please fill all fields");
    }

    //hash password
    if (!saltRounds) throw new Error("add saltrounds");
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    //create new user
    const newUser = new UserModel({
      username,
      password: hashedPassword
    });
    await newUser.save();
    return res.status(201).send({ message: "User registered successfully" });
  } catch (error: any) {
    if (error.code === 11000) {
      console.log("username is already taken");
      return res.status(500).send({ error: "username is already taken" });
    }
    console.error(error);
    return res.status(500).send({ error: error.message });
  }
}
