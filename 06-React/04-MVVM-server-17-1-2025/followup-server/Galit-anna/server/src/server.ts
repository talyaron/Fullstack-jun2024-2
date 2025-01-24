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
const database = 'fs-jun24';

//connection
mongoose.connect(`${dbUrl}/${database}`).then(()=>{
    console.info("DB connected")
}).catch((err)=>{
    console.error(err)
});

//routes

import productsRouter from './routes/products/productRoute';
app.use("/api/products", productsRouter);
app.use("/api/add-products", productsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})