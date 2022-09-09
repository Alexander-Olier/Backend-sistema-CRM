const { Router } = require("express");

const RoutesTask = Router();
const { listTask, Task, SaveTask, DeleteTask, UpdateTask } = require("../controllers/task.controller");

RoutesTask.get("/:iduser", listTask);
RoutesTask.get("/:iduser/:id", Task)
RoutesTask.post("/add/:iduser", SaveTask);
RoutesTask.delete("/delete/:iduser/:id", DeleteTask)
RoutesTask.put("/update/:iduser/:id", UpdateTask)

module.exports = RoutesTask;
