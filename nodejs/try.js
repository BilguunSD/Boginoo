const express = require("express");
const mongoose = require("mongoose");
const UserRouter = require("./router/userRouter");
const { connectDatabse } = require("./database/databse");

const port = 8000;

const app = express();
app.use(express.json());
app.use(UserRouter);

const startServer = async () => {
  await connectDatabse();
  app.listen(port, () => {
    console.log(`server is running at localhost:${port}`);
  });
};

startServer();
