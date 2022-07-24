import { Schema, model } from "mongoose";

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
  balance: balanceSchema,
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
