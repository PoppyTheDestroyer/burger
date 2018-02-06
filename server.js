const express = require("express");
const bodyParser = require("body-parser");
const override = require("method-override");

var port = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false}));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "./views/layouts/main.handlebars"}));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);

console.log(`Listening at port ${port}`);