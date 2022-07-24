import { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const balanceSchema = new Schema(
  {
    currency: {
      type: String,
      default: "RUB",
      required: false,
    },
    value: {
      type: Number,
      default: 0,
      required: false,
    },
  },
  { _id: false }
);

const schema = new Schema({
  balance: balanceSchema,
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
