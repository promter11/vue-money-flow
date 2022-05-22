import { Schema, model } from "mongoose";

const schema = new Schema({
  email: {
    ref: "users",
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
    required: true,
  },
});

export default model("tokens", schema);
