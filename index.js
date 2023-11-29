import express from 'express';
import dotenv from 'dotenv/config';
import mongoDBConnect from './mongDB/connection.js';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './router/user.js'
const app = express();

mongoDBConnect();

app.use(express.urlencoded({extended: true}));
app.use(express.json()) 
app.use(cors());

app.use('/', userRoutes);
 


var port = process.env.PORT || 5000;

app.listen(port,()=>{console.log("hello")});