import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import dotenv from 'dotenv';
import TodoRouter from './routes/TodoRouter';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }, 
}));

const dbUrl = process.env.DB_URL;
const database = 'Todo-List';

mongoose.connect(`${dbUrl}/${database}`).then(() => {
  console.log("DB connected");
}).catch((err) => {
  console.error(err);
});

const authenticateUser = (req: any, res: any, next: any) => {
  if (!req.session.userId) {
    return res.status(403).json({ error: 'Authentication required' });
  }

  req.userId = req.session.userId; 
  next();
};

// Routes
app.use("/api/todos", authenticateUser, TodoRouter);

app.post('/login', async (req: any, res: any) => {
  const { username, password } = req.body;

  const user = { _id: '12345', username };

  if (username && password) {
    req.session.userId = user._id; 
    return res.json({ message: 'Login successful' });
  } else {
    return res.status(400).json({ message: 'Invalid credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
