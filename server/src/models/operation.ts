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

const itemSchema = new Schema(
  {
    balance: balanceSchema,
    category: {
      type: Number,
      required: true,
    },
  },
  { _id: false }
);

const schema = new Schema({
  date: {
    type: String,
    required: true,
  },
  items: [itemSchema],
});

export default model("operations", schema);
