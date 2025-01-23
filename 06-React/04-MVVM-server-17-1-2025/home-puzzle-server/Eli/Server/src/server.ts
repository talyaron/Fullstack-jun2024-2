import express from 'express'
import userRoutes from "./Routes/userRoutes";
import cors from"cors"
import mongoose from 'mongoose';
import 'dotenv/config';

const app = express()
const port = 3000;

app.use(cors());

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use("/api/users", userRoutes);
const dbUrl = process.env.DB_URL;
const database = 'fs-jun24';

//connection
mongoose.connect(`${dbUrl}/${database}`).then(()=>{
    console.info("DB connected")
}).catch((err)=>{
    console.error(err)
});
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})