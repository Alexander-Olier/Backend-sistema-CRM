const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors")
//files
const RoutesUser = require("./src/routes/user.route");
const RoutesComment = require("./src/routes/user.route");
const Routes = require("./src/routes/routes");

const app = express();
const port = process.env.PORT || 5000;


//use middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

//routes:
//1. user
app.use("/cmr/", Routes);
//2.comment

//start server
const server = app.listen(port, () => {
  console.log(`Server started on port ` + port);
});

app.get("/", (req, res) => {
  res.send("Hola mundo soy un CRUD, puerto " + port);
});
