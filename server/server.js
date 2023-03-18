import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
app.get("/", (req, res) => {
  res.status(200).send("request check");
});
export default server;
