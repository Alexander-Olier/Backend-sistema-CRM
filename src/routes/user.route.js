const { Router } = require("express");

const RoutesUser = Router();
const { listUser, User, SaveUser, DeleteUSer, UpdateUser } = require("../controllers/user.controller");

RoutesUser.get("/", listUser);
RoutesUser.get("/:id", User)
RoutesUser.post("/add", SaveUser);
RoutesUser.delete("/delete/:id", DeleteUSer)
RoutesUser.put("/update/:id", UpdateUser)

module.exports = RoutesUser;
