import cors from "cors";
import cookies from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import routes from "./routes";

dotenv.config();

const database = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL);

database.on("error", (error) => console.log(`[db]: ${error}`));

database.once("connected", () =>
  console.log("[db]: Database connection successful")
);

const app = express();

app.use(
  cors({
    credentials: true,
    origin: `${process.env.CLIENT_URL}:${process.env.CLIENT_PORT}`,
  })
);
app.use(cookies());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.listen(process.env.SERVER_PORT, () => {
  console.log(
    `[server]: Server is running at ${process.env.SERVER_URL}:${process.env.SERVER_PORT}`
  );
});
