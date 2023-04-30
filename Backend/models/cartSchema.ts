import mongoose from "mongoose";
import { cartInterface } from "../interfaces/cart";

const cartSchema = new mongoose.Schema<cartInterface>(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId:{
          type:String,
          required:true,
          unique:true
        },
        quantity: {
          type: Number,
          required:true,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
);

export const cartModel = mongoose.model("cart", cartSchema);
