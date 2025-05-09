import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { developerJokes } from './data/jokes';

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Routes
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to the Express TypeScript API' });
});

// Sample API route
app.get('/api/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello from the API!' });
});

// Developer jokes routes
app.get('/api/jokes', (req: Request, res: Response) => {
  res.json(developerJokes);
});

// Get a random joke
app.get('/api/jokes/random', (req: Request, res: Response) => {
  const randomIndex = Math.floor(Math.random() * developerJokes.length);
  res.json(developerJokes[randomIndex]);
});

// Get a specific joke by ID
app.get('/api/jokes/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const joke = developerJokes.find(joke => joke.id === id);
  
  if (joke) {
    res.json(joke);
  } else {
    res.status(404).json({ message: 'Joke not found' });
  }
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'production' ? {} : err.stack
  });
});

export default app;