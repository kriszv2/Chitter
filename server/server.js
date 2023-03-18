import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

//Create db connection
mongoose.connect(`${process.env.DATABASE_URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
//logs error if connection fails
db.on("error", (err) => {
  console.log(err);
});
//logs message if connection is successful
db.once("open", () => {
  console.log("Connected to database.");
});

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 4000;

//Create connection to server
const server = app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
app.get("/", (req, res) => {
  res.status(200).send("request check");
});
export default server;
