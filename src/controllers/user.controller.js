const fs = require("fs");
const UserCtrls = {};
const dataDirection = "./src/utils/data.json";
const jsonData = fs.readFileSync(dataDirection);
const data = JSON.parse(jsonData);

UserCtrls.listUser = async (req, res) => {
  Object.keys(data).forEach((key) => {
    if (data[key] === null) {
      data[key] = { undefined };
    }
  });
  res.send(data);
};

UserCtrls.User = async (req, res) => {
  res.send(data[req.params.id]);
};
UserCtrls.SaveUser = async (req, res) => {
  data.push(req.body);
  const fileData = JSON.stringify(data);
  fs.writeFile(dataDirection, fileData, function (err) {
    if (err) {
      res.send(err);
    }
    res.send("save");
  });
};

UserCtrls.DeleteUSer = (req, res) => {
  //se borra por el index del Objeto Json
  const index = parseInt(req.params.id, 10) + 1;
  console.log(index + " " + req.params.id)
  data.splice(req.params.id, index);
  const fileData = JSON.stringify(data);
  fs.writeFile(dataDirection, fileData, function (err) {
    if (err) {
      res.send(err);
    }
    res.send(data);
  });
};
UserCtrls.UpdateUser = (req, res) => {
  data[req.params.id] = req.body;
  const fileData = JSON.stringify(data);
  fs.writeFile(dataDirection, fileData, function (err) {
    if (err) {
      res.send(err);
    }
    res.send("update");
  });
};

module.exports = UserCtrls;
