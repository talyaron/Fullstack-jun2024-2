import express from 'express'
import mongoose from "mongoose";
import cookieParser from 'cookie-parser'; 
import 'dotenv/config';
import cors from 'cors';

const app = express()
const port = 3000;

app.use(cors({
  origin: 'http://localhost:5176',
  credentials: true,
}));

app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//DB
const dbUrl = 'mongodb+srv://rrrgrg304:R6pZjl029YQvhaSi@cluster0.pw3xh.mongodb.net';
const database = 'fs-jun24';

//connection
mongoose.connect(`${dbUrl}/${database}`).then(()=>{
    console.info("DB connected")
}).catch((err)=>{
    console.error(err)
});

//routes
import userRoutes from './routes/user/userRoutes';
app.use("/api/users", userRoutes);
import todoRoutes from './routes/todo/todoRoutes';
app.use("/api/todos", todoRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})