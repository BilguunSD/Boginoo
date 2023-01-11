const express = require("express");
const {
  userGetController,
  userGetControllerById,
  userPostController,
  userDeleteController,
  userPutController,
  usersDeleteController,
  userLogin,
} = require("../controller/usersController");

const { TokenCheckerMiddleware } = require("../middleware");

const UserRouter = express.Router();

UserRouter.get("/user", TokenCheckerMiddleware, userGetController)
  .get("/user/:id", TokenCheckerMiddleware, userGetControllerById)
  .post("/user", userPostController)
  .delete("/user/:id", userDeleteController)
  .delete("/users", usersDeleteController)
  .put("/user/:id", userPutController)
  .post("/login", userLogin);

module.exports = UserRouter;
