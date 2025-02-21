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
const dbUrl = 'mongodb+srv://alexisv1199:Vivalexxxa@cluster0.pdw7k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
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