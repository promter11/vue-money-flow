import { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const schema = new Schema({
  balance: {
    type: Number,
    default: 0,
    required: false,
  },
  currency: {
    type: Number,
    default: 4,
    required: false,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: [/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/, "Invalid email address"],
  },
  firstName: {
    type: String,
    default: "",
    required: false,
  },
  lastName: {
    type: String,
    default: "",
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
});

schema.plugin(uniqueValidator);

export default model("users", schema);
