const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const db = require("./db");
const userRouter = require("./Router/userRouter");

dotenv.config({ path: path.join(__dirname, "./config.env") });
app.use(express.json());

//cors
app.use(cors());
app.options("*", cors());

app.use("/", userRouter);

db();

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
