import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import MongoConn from './config/mongoConn.js';
import dotenv from "dotenv";
import Routes from './routes/router.js';
dotenv.config();

const PORT = process.env.PORT;


const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.listen(PORT);

if (process.env.NODE_ENV ==="production") {
    app.use(express.static("client/build/"))
}

app.use('/app', Routes);

MongoConn(app);
