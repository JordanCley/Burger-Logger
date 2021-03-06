const Burger = require("../models/burger.js");
const router = require("express").Router();
const db = require("../models");
let ateBurgers = [];
let burgers = [];

router.get("/", function(req, res) {
  db.Burger.findAll().then(result => {
    for (let i = 0; i < result.length; i++) {
      if (result[i].devoured === false) {
        let name = result[i];
        burgers.push(name);
      } else {
        let name = result[i];
        ateBurgers.push(name);
      }
    }
    res.render("index.hbs", { burgers: burgers, ateBurgers: ateBurgers });
    ateBurgers = [];
    burgers = [];
  });
});

router.post("/new", function(req, res) {
  const burger = req.body;
  console.log(burger);
  db.Burger.create({
    burger_name: burger.name
  }).then(function(results) {
    res.end();
  });
});

router.put("/:id", function(req, res) {
  db.Burger.update(
    {
      devoured: 1
    },
    {
      where: {
        id: req.params.id
      }
    }
  ).then(function(results) {
    res.end();
  });
});

router.delete("/:id", function(req, res) {
  db.Burger.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(results) {
    res.end();
  });
});

module.exports = router;
