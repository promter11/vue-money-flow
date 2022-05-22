import { Schema, model } from "mongoose";

const schema = new Schema({
  balance: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    default: "#000000",
    required: false,
  },
  icon: {
    type: String,
    default: "credit-card-outlined",
    required: false,
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
