const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParse = require("body-parser");
const { readdirSync } = require("fs");
const app = express();
const connectDB = require("./config/db");
connectDB();
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParse.json({ limit: "20mb" }));

readdirSync("./routes").map((file) =>
  app.use("/api/", require("./routes/" + file))
);

app.listen(3000, () => console.log("Server is Running . . ."));
