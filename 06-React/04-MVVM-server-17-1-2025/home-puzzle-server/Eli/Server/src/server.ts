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

export const secretKey = process.env.SECRET_JWT || "1234";
export const saltRounds = Number(process.env.SALT_BCRYPT) || 3;

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