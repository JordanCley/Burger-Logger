const express = require("express");
const burgerRoutes = require("./routes/burgerRoutes.js");
const hbs = require("express-handlebars");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("hbs", hbs({ defaultLayout: "main.hbs" }));
app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname,"/public")));

app.use("/", burgerRoutes);



// start server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });