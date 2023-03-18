import express, { urlencoded } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import { postMessage } from "./src/routes/MessageRoute.js";

dotenv.config();
const app = express();
const db = mongoose.connection;
const PORT = process.env.PORT || 4000;

//Create db connection
mongoose.connect(`${process.env.DATABASE_URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//logs error if connection fails
db.on("error", (err) => {
  console.log(err);
});
//logs message if connection is successful
db.once("open", () => {
  console.log("Connected to database.");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Create connection to server
const server = app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

app.get("/", (req, res) => {
  res.status(200).send("request check");
});

app.use("/", postMessage);

export default server;
