const express = require("express");
require("dotenv").config();
const notRoute = require("./routes/notlar");
const mongoose = require("mongoose");

const app = express();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(express.json());

const port = process.env.PORT || 4000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MONGO DB bağlandı");
    app.listen(port, () => {
      console.log(`${port} Portunda dinlenmeye başlandı`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api/notlar", notRoute);
