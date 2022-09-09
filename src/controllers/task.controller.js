const fs = require("fs");
const TaskCtrls = {};
const dataDirection = "./src/utils/data.json";
const jsonData = fs.readFileSync(dataDirection);
const data = JSON.parse(jsonData);

TaskCtrls.listTask = async (req, res) => {
  res.send(data[req.params.iduser].task);
};

TaskCtrls.Task = async (req, res) => {
  res.send(data[req.params.iduser].task[req.params.id]);
};
TaskCtrls.SaveTask = async (req, res) => {
  const { body } = req.body;
  if (data[req.params.iduser].task) {
    data[req.params.iduser].task.push({"body":body});
  } else {
    Object.assign(data[req.params.iduser],{ task: [{ body }] });
  }

  const fileData = JSON.stringify(data);
  fs.writeFile(dataDirection, fileData, function (err) {
    if (err) {
      res.send(err);
    }
    res.send("save");
  });
};
TaskCtrls.DeleteTask = (req, res) => {
  delete data[req.params.iduser].task[req.params.id];
  const fileData = JSON.stringify(data);
  fs.writeFile(dataDirection, fileData, function (err) {
    if (err) {
      res.send(err);
    }
    res.send("Delete");
  });
};
TaskCtrls.UpdateTask = (req, res) => {
  data[req.params.iduser].task[req.params.id] = req.body;
  const fileData = JSON.stringify(data);
  fs.writeFile(dataDirection, fileData, function (err) {
    if (err) {
      res.send(err);
    }
    res.send("update");
  });
};

module.exports = TaskCtrls;
