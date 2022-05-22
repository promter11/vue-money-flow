import { Schema, model } from "mongoose";

const iconSchema = new Schema(
  {
    color: {
      type: String,
      default: "#000000",
      required: false,
    },
    component: {
      type: String,
      default: "credit-card-outlined",
      required: false,
    },
  },
  { _id: false }
);

const schema = new Schema({
  balance: {
    type: Number,
    required: true,
  },
  currency: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    default: "",
    required: false,
  },
  icon: iconSchema,
  name: {
    type: String,
    required: true,
  },
  type: {
    type: Number,
    required: true,
  },
});

export default model("accounts", schema);
