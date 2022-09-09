const fs = require("fs");
const CommentCtrls = {};
const dataDirection = "./src/utils/data.json";
const jsonData = fs.readFileSync(dataDirection);
const data = JSON.parse(jsonData);

CommentCtrls.listComment = async (req, res) => {
  res.send(data[req.params.iduser].comentarios);
};

CommentCtrls.Comment = async (req, res) => {
  res.send(data[req.params.iduser].comentarios[req.params.id]);
};
CommentCtrls.SaveComment = async (req, res) => {
  const { body } = req.body;
  if (data[req.params.iduser].comentarios) {
    data[req.params.iduser].comentarios.push({ body: body });
  } else {
    Object.assign(data[req.params.iduser], { comentarios: [{ body }] });
  }
  const fileData = JSON.stringify(data);
  fs.writeFile(dataDirection, fileData, function (err) {
    if (err) {
      res.send(err);
    }
    res.send("save");
  });
};
CommentCtrls.DeleteComment = (req, res) => {
  delete data[req.params.iduser].comentarios[req.params.id];
  const fileData = JSON.stringify(data);
  fs.writeFile(dataDirection, fileData, function (err) {
    if (err) {
      res.send(err);
    }
    res.send("Delete");
  });
};
CommentCtrls.UpdateComment = (req, res) => {
  data[req.params.iduser].comentarios[req.params.id] = req.body;
  const fileData = JSON.stringify(data);
  fs.writeFile(dataDirection, fileData, function (err) {
    if (err) {
      res.send(err);
    }
    res.send("update");
  });
};

module.exports = CommentCtrls;
