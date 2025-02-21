import User from "../../model/users/userModel";

export async function createUser(req:any, res:any) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: "User already exists" });
    }

    const user = await User.create({ name, email, password });
    res.status(201).json({ message: "User created successfully", user });
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
}
