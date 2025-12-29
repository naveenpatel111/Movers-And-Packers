import mongoose from 'mongoose';

const CategorySchema = mongoose.Schema({
  _id: Number,
  catnm: {
    type: String,
    required: [true," Category Name is required"],
    lowercase: true,
    trim: true,
  },
  caticonnm: {
    type: String,
    required: [true,"icon is required"],
    unique:true,
    trim: true
  },
  info: String
});



// compile schema to model
const CategorySchemaModel = mongoose.model('Category_Details',CategorySchema);

export default CategorySchemaModel;