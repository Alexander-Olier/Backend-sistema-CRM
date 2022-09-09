const RoutesComment = require("./comment.route");
const RoutesUser = require("./user.route");

const { Router } = require("express");
const RoutesTask = require("./task.route");

const Routes = Router();

Routes.use("/user/", RoutesUser);
Routes.use("/comment/", RoutesComment);
Routes.use("/task/", RoutesTask)

module.exports = Routes;
