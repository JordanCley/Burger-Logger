require("dotenv").config();
const express = require("express");
const apiRoutes = require("./routes/apiRoutes.js");

const hbs = require("express-handlebars");
const path = require("path");

const db = require("./models");

const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("hbs", hbs({ defaultLayout: "main.hbs" }));
app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "/public")));

app.use("/", apiRoutes);

// start server
db.sequelize.sync({}).then(function(){
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

