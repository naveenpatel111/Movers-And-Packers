
// 🔥 LOAD ENV FIRST
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";

// ROUTES
import UserRouter from "./routes/user.router.js";
import CategoryRouter from "./routes/category.router.js";
import SubCategoryRouter from "./routes/SubCategoryRouter.js";
import aiChatRoute from "./routes/aiChat.js";
import Gateway from "./controller/payment.controller.js";
import Paymentrouter from "./routes/paymentrouter.js";
import ConsignmentRouter from './routes/ConsignmentRouter.js'
import TrackingRouter from './routes/TrackingRouter.js'

const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());  


// ROUTES
app.use("/api/ai", aiChatRoute);
app.use("/user", UserRouter);
app.use("/category", CategoryRouter);
app.use("/subcategory", SubCategoryRouter);
app.post("/payment", Gateway);
app.use("/paymentdone", Paymentrouter);
app.use("/addconsignment", ConsignmentRouter);
app.use("/tracking", TrackingRouter);


// SERVER
app.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
});


// import dotenv from "dotenv";
// dotenv.config(); // 🔥 MUST BE FIRST

// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';

// const app = express();   

// //to link routers
// import UserRouter from './routes/user.router.js';
// import CategoryRouter from './routes/category.router.js';
// import SubCategoryRouter from './routes/SubCategoryRouter.js'
// // file uload import
// import fileUpload from 'express-fileupload';

// import Gateway from './controller/payment.controller.js'


// import aiChatRoute from "./routes/aiChat.js" ;


// app.use("/api/ai", aiChatRoute);

// //to allow cross origin request
// app.use(cors());

// app.use(fileUpload())

// //configuration to fetch req body content : body parser middleware
// //used to fetch req data from methods like : POST , PUT , PATCH , DELETE
// //it will run without body parser as it is inbield in express use 
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));

// //config to load routers
// app.use("/user",UserRouter);
// app.use("/category",CategoryRouter);
// app.use("/subcategory",SubCategoryRouter);
// app.post("/payment",Gateway);

// app.listen(3001);
// console.log("server invoked at link http://localhost:3001");  
