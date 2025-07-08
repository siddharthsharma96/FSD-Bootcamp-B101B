const express = require("express");
const userController = require("./../Controllers/userControllers");

const UserRouter = express.Router();

UserRouter.route("/")
  .get(userController.getUser)
  .post(userController.createUser);
UserRouter.route("/:id")
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = UserRouter;
