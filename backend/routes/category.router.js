import express from 'express';

//to link controller
import * as CategoryController from '../controller/category.controller.js';

const CategoryRouter = express.Router();

CategoryRouter.post("/save",CategoryController.save);
CategoryRouter.get("/fetch",CategoryController.fetch);

export default CategoryRouter;

