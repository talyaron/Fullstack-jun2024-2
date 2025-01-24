import User from '../../model/users/userModel';

export const login = async (req: any, res: any) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    if (password !== user.password) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    res.cookie('userId', user._id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: 'Strict',
    });
    
    res.status(200).json({ message: "Login successful" });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
