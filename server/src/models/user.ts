import { Schema, model } from "mongoose";

const schema = new Schema({
  balance: {
    type: Number,
    required: false,
  },
  currency: {
    type: Number,
    required: false,
  },
  email: {
    type: String,
    required: true,
    validate: [/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/, "Invalid email address"],
  },
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
});

export default model("users", schema);
