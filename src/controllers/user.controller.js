const fs = require("fs");
const UserCtrls = {};
const dataDirection = "./src/utils/data.json";
const jsonData = fs.readFileSync(dataDirection);
const data = JSON.parse(jsonData);

UserCtrls.listUser = async (req, res) => {
  res.send(JSON.parse(jsonData));
};

UserCtrls.User = async (req, res) => {
  res.send(data[req.params.id]);
};
UserCtrls.SaveUser = async (req, res) => {
  const { name, email, cel } = req.body;
  data.push({ name, email, cel });
  const fileData = JSON.stringify(data);
  fs.writeFile(dataDirection, fileData, function (err) {
    if (err) {
      res.send(err);
    }
    res.send("save");
  });
};
UserCtrls.DeleteUSer = (req, res) => {
  delete data[req.params.id];
  const fileData = JSON.stringify(data);
  fs.writeFile(dataDirection, fileData, function (err) {
    if (err) {
      res.send(err);
    }
    res.send("Delete");
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
