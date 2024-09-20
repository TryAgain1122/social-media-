import express from 'express'
import dotenv from 'dotenv'
import dbConnect from './config/dbConnet.js';

dotenv.config();
dbConnect();
const app = express();


const PORT = 3000

app.listen(PORT, () => {
    console.log(`server is running ${PORT}`)
})