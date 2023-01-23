const express = require("express");
const UserRouter = require("./routers/userRouter");
const UrlRouter = require("./routers/urlRouter");
const { connectDatabase } = require("./database/database");
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(UserRouter);
app.use(UrlRouter);

const startServer = async () => {
  await connectDatabase();
  app.listen(PORT, () => {
    console.log(`server is running at localhost:${PORT}`);
  });
};

startServer();
