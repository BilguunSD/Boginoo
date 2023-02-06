const express = require('express');
const UserRouter = require('./routers/userRouter');
const UrlRouter = require('./routers/urlRouter');
const { connectDatabase } = require('./database/database');
const cors = require('cors');
const dotenv = require('dotenv').config();

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(UserRouter);
app.use(UrlRouter);

const startServer = async () => {
    await connectDatabase();
    app.listen(port, () => {
        console.log(`server is running at localhost:${port}`);
    });
};

startServer();
