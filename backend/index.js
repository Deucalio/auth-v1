// set up a express server
const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true,
}));

mongoose
  .connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/auth", require("./routers/userRouter"));
app.use("/customer", require("./routers/customerRouter"));

// listen to port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
