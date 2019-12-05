const express = require("express");
const apiRoutes = require("./routes/apiRoutes.js");

const hbs = require("express-handlebars");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

console.log(process.env.JAWSDB_DATABASE,
  process.env.JAWSDB_USER,
  process.env.JAWSDB_PASS,);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("hbs", hbs({ defaultLayout: "main.hbs" }));
app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "/public")));

app.use("/", apiRoutes);

// start server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
