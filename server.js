import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.static("./uploads"));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect("mongodb://localhost:27017/CRUD_11")
.then(()=>{console.log("DB Connect")});

app.listen(1000,()=>{console.log("Server Start On http://localhost:1000")});