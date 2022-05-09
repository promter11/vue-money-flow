import { Schema, model } from "mongoose";

const iconSchema = new Schema({
  color: {
    type: String,
    required: true,
  },
  component: {
    type: String,
    required: true,
  },
});

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
    required: true,
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
