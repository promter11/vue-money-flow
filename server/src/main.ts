import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Example");
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(
    `[server]: Server is running at ${process.env.SERVER_URL}:${process.env.SERVER_PORT}`
  );
});
