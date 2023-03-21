// import express from "express";
// import dotenv from "dotenv";
// import productRouter from "./routers/product";
// import mongoose from "mongoose";
// const app = express();
// app.use(express.json());
// dotenv.config();
// app.use(productRouter);
// đăng ký middleware" giải mã dữ liệu json


// app.listen(process.env.PORT, function () {
//     console.log(`Server is running on port ${process.env.PORT}`);
// });
// mongoose.connect("mongodb://localhost:27017/nodejs").then(() => console.log("db is conected")).catch(() => console.log("Faild connect"));
// export const viteNodeApp = app;

// try/catch
// npm i dotenv --save
// npm i concurrently -gcl
// routes -> sử dụng express.Router
// controllers

import express from "express";
import productRouter from "./routers/product"
import dotenv from "dotenv";
const app=express();
app.use(express.json());
app.use(productRouter);
dotenv.config();

app.listen(process.env.PORT,function(){
    console.log(`server is running on port ${process.env.PORT}`)
})

export const viteNodeApp =app;