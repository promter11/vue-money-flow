import { Schema, model } from "mongoose";

const schema = new Schema({
  balance: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: Number,
    required: true,
  },
});

export default model("categories", schema);
