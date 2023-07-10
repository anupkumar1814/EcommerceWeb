//  const express=require('express');
// deplay
// import path from 'path';
// deplay
import express from "express";
import dotenv from "dotenv";
import Connection from "./database/db.js";
import Router from "./routes/route.js";
import defaultData from './default.js'
import cors from 'cors';
import bodyParser from "body-parser";
const app = express();
dotenv.config();
app.use(cors());

// deploy
// app.use(express.static(path.join(__dirname,'../client/build')))
// app.get('*',function(req,res){
//     res.sendFile(path.join(__dirname,'../client/build/index.html'))
// })
// deplay
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 8000;
const USEERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL=process.env.MONGODB_URI || `mongodb://${USEERNAME}:${PASSWORD}@ac-tp2rgc5-shard-00-00.ewoanyf.mongodb.net:27017,ac-tp2rgc5-shard-00-01.ewoanyf.mongodb.net:27017,ac-tp2rgc5-shard-00-02.ewoanyf.mongodb.net:27017/ECOMMERCE-WEBSITE?ssl=true&replicaSet=atlas-9l3fep-shard-0&authSource=admin&retryWrites=true&w=majority`;


Connection(URL);

app.use('/', Router);
app.listen(PORT, () => console.log(`server is running on port ${PORT} `));
defaultData();
