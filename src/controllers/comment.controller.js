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
  //se borra por el index del Objeto Json
  const index = parseInt(req.params.id, 10) + 1;
  const idUser = parseInt(req.params.iduser, 10);
  console.log(index + " " + req.params.id);
  data[idUser].comentarios.splice(req.params.id, index);
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
