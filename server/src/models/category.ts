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

const schema = new Schema({
  balance: balanceSchema,
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
