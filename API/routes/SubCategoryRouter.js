import express from 'express';

import * as SubCategoryController from '../controller/SubCategoryController.js'

const SubCategoryRouter = express.Router();

SubCategoryRouter.post("/save",SubCategoryController.save);
SubCategoryRouter.get("/fetch",SubCategoryController.fetch);

export default SubCategoryRouter;
