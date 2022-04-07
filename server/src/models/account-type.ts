import { Schema, model } from "mongoose";

const schema = new Schema({
  label: {
    type: String,
    required: true,
  },
  sign: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
});

export default model("account-types", schema);
