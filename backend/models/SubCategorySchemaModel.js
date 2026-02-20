import mongoose from 'mongoose';

const SubCategorySchema = mongoose.Schema({
  _id: Number,
  catnm: {
    type: String,
    required: [true," Category Name is required"],
    lowercase: true,
    trim: true,
  },
  subcatnm : {
    type: String,
    required:[true,"SubCategory Name is required"],
    unique:true,
    lowercase:true,
    trim:true,
  },
  subcaticonnm: {
    type: String,
    required: [true,"icon is required"],
    trim: true
  },
  info: String
});



// compile schema to model
const SubCategorySchemaModel = mongoose.model('SubCategory_Details',SubCategorySchema);

export default SubCategorySchemaModel;