const { Router } = require("express");

const RoutesComment = Router();
const { listComment, Comment, SaveComment, DeleteComment, UpdateComment } = require("../controllers/comment.controller");

RoutesComment.get("/:iduser", listComment);
RoutesComment.get("/:iduser/:id", Comment)
RoutesComment.post("/add/:iduser", SaveComment);
RoutesComment.delete("/delete/:iduser/:id", DeleteComment)
RoutesComment.put("/update/:iduser/:id", UpdateComment)

module.exports = RoutesComment;
