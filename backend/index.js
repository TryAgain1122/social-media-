import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnet.js";
import bodyParser from "body-parser";
import cors from "cors";
import UserRoute from "./Routes/UserRoute.js";
import AuthRoute from './Routes/AuthRoute.js'
import PostRoute from './Routes/PostRoute.js'

dotenv.config();
dbConnect();
const app = express();

app.use(cors());

//Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json());

//Routes
app.use("/user", UserRoute);
app.use("/auth", AuthRoute);
app.use('/post', PostRoute)

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
