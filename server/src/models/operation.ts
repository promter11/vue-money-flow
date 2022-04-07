import { Schema, model } from "mongoose";

const itemSchema = new Schema({
  balance: {
    type: Number,
    required: true,
  },
  category_name: {
    type: String,
    required: true,
  },
  currency: {
    type: Number,
    required: true,
  },
  type: {
    type: Number,
    required: true,
  },
});

const schema = new Schema({
  date: {
    type: String,
    required: true,
  },
  items: [itemSchema],
});

export default model("operations", schema);
