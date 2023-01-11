const express = require("express");
const UserRouter = require("./router/userRouter");
const { connectDatabase } = require("./database/database");

const port = 8000;

const app = express();
app.use(express.json());
app.use(UserRouter);

const startServer = async () => {
  await connectDatabase();
  app.listen(port, () => {
    console.log(`server is running at localhost:${port}`);
  });
};

startServer();
