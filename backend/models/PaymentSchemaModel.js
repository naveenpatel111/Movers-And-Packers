import mongoose from "mongoose";

const PaymentSchema=mongoose.Schema({
    _id:Number,
    email: {
    type: String,
    required: [true,"UserId is required"],
    lowercase: true,
    trim: true,
  },
  amount: {
    type: Number,
    required: [true,"amount is required"],
    trim: true
  },
})
const PaymentSchemaModel=mongoose.model("PaymentDetails",PaymentSchema)
export default PaymentSchemaModel
