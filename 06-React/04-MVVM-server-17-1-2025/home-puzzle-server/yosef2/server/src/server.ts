import express from 'express'
import mongoose from "mongoose";
import cookieParser from 'cookie-parser';  
import 'dotenv/config';
import cors from 'cors';

const app = express()
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//DB
const dbUrl = process.env.DB_URL;
const database = 'ToDoReactServer';

//connection
mongoose.connect(`${dbUrl}/${database}`).then(()=>{
    console.info("DB connected")
}).catch((err)=>{
    console.error(err)
});

//routes
import clientsRouter from './routes/clients/clientRoutes';
app.use("/api/clients", clientsRouter);
import productsRouter from './routes/products/productRoute';
app.use("/api/products", productsRouter);
import commentsRouter from './routes/comments/commentsRoute';
app.use("/api/comments", commentsRouter);
import Purchase from "./routes/purchase/purchaseRouter";
app.use("/api/purchase", Purchase);
import toDoRouter from './routes/toDo/toDoRoutes'
app.use("/api/toDo", toDoRouter);

app.listen(port, () => {
  console.log(`To Do React Server is running on port ${port}`)
})